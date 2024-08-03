import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../../assets/images";
import { db, auth } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const DoctorInformation = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          throw new Error("User not authenticated");
        }
        const docRef = doc(db, "Doctors", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDoctorData(docSnap.data());
          setImage(docSnap.data().profileImage || assets.Profile); // Assuming profileImage is the URL of the image
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red">Error: {error}</div>;
  }

  const handleCancel = () => {
    navigate("/doctor-profile"); // Navigate to the dashboard
  };

  const handleImageUploadClick = () => {
    document.getElementById('file-upload').click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDoctorData({ ...doctorData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("User not authenticated");
      }
      const docRef = doc(db, "Doctors", user.uid);
      await setDoc(docRef, doctorData, { merge: true });
      alert("Profile updated successfully");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-seablue to-seablue-200 font-sans">
      <h3 className="w-full my-1 pt-10 text-5xl font-bold leading-tight text-center text-white">
        Profile Information
      </h3>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/4 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <svg
        viewBox="0 0 1428 174"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            transform="translate(-2.000000, 44.000000)"
            fill="#FFFFFF"
            fillRule="nonzero"
          >
            <path
              d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
              opacity="0.100000001"
            ></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path
              d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
              id="Path-4"
              opacity="0.200000003"
            ></path>
          </g>
          <g
            transform="translate(-4.000000, 76.000000)"
            fill="#FFFFFF"
            fillRule="nonzero"
          >
            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
          </g>
        </g>
      </svg>

      <div className="min-h-screen bg-white flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-auto"
        >
          <fieldset className="border-t-2 border-seablue-200 mt-6">
            <legend>
              <h3 className="text-seablue-200 mb-2">Personal Details</h3>
            </legend>

            <div className="relative flex flex-col items-center mb-10">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
              <img
                id="profile-image"
                src={image}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                onClick={handleImageUploadClick}
              >
                <span className="text-white bg-black bg-opacity-50 p-2 rounded-full">Upload Image</span>
              </button>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  htmlFor="name"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  Name*
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={doctorData?.name || ""}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full bg-white text-darkgray border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-darkgray"
                />
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  htmlFor="country"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="Country"
                  value={doctorData?.country || ""}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-white text-darkgray border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-darkgray"
                />
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  htmlFor="nationality"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  Nationality
                </label>
                <input
                  id="nationality"
                  type="text"
                  placeholder="Nationality"
                  value={doctorData?.nationality || ""}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-white text-darkgray border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-darkgray"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  htmlFor="gender"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  Gender
                </label>
                <input
                  id="gender"
                  type="text"
                  placeholder="gender"
                  value={doctorData?.gender || ""}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-white text-darkgray border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-darkgray"
                />
              </div>
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  htmlFor="institute"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  Institute
                </label>
                <input
                  id="institute"
                  type="text"
                  placeholder="institute"
                  value={doctorData?.institute || ""}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-white text-darkgray border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-darkgray"
                />
              </div>
          </fieldset>
          <fieldset className="border-t-2 border-seablue-200 mt-6">
            <legend>
              <h3 className="text-seablue-200 mb-2">Contact Details</h3>
            </legend>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  htmlFor="phone"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  Phone Number*
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  value={doctorData?.phone || ""}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full bg-white text-darkgray border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-darkgray"
                />
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  htmlFor="address"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Address"
                  value={doctorData?.address || ""}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-white text-darkgray border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-darkgray"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  htmlFor="birthDate"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  birthDate
                </label>
                <input
                  id="birthDate"
                  type="text"
                  placeholder="Birthdate"
                  value={doctorData?.birthDate || ""}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-white text-darkgray border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-darkgray"
                />
              </div>
             
            </div>
          </fieldset>
          <div className="flex items-center justify-center">
            <button
              className="bg-seablue-200 hover:bg-seablue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            <button
              className="ml-4 bg-darkgray-500 hover:bg-darkgray text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorInformation;
