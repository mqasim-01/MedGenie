import React, { useState } from "react";
import assets from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase"; // Adjust the path if necessary
import { doc, updateDoc } from "firebase/firestore";

export default function AddPatientInformation() {
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/patient-profile"); // Navigate to the patient profile
  };

  const handleImageUploadClick = () => {
    document.getElementById("file-upload").click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user) {
      // Handle the case where the user is not logged in
      return;
    }

    const address = document.getElementById("address").value;
    const bloodGroup = document.getElementById("blood").value;
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const nationality = document.querySelector('select').value;

    const birthdate = `${year}-${month}-${day}`;

    const newErrors = {};

    if (!address) newErrors.address = "Address is required";
    if (!bloodGroup) newErrors.bloodGroup = "Blood Group is required";
    if (!city) newErrors.city = "City is required";
    if (!country) newErrors.country = "Country is required";
    if (!phone) newErrors.phone = "Phone Number is required";
    if (!gender) newErrors.gender = "Gender is required";
    if (!day) newErrors.day = "Day is required";
    if (!month) newErrors.month = "Month is required";
    if (!year) newErrors.year = "Year is required";
    if (!nationality) newErrors.nationality = "Nationality is required";
    if (!image) newErrors.image = "Profile image is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await updateDoc(doc(db, "Patients", user.uid), {
        address,
        bloodGroup,
        city,
        country,
        phone,
        gender,
        birthdate,
        nationality,
        photo: image || "", // Handle the case where no image is uploaded
      });
      navigate("/patient-profile");
    } catch (error) {
      console.error("Error updating patient information: ", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-seagreen to-seagreen-200 font-sans">
      <h3 className="w-full my-1 pt-10 text-5xl font-bold leading-tight text-center text-white">
        Add Personal Information
      </h3>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/3 opacity-25 my-0 py-0 rounded-t"></div>
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
          <fieldset className="border-t-2 border-seagreen mt-6">
            <legend>
              <h3 className="text-seagreen mb-2">Personal Details</h3>
            </legend>

            <div className="relative flex flex-col items-center mb-10">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      document.getElementById("profile-image").src =
                        reader.result;
                      setImage(reader.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <img
                id="profile-image"
                src={assets.Profile}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                onClick={handleImageUploadClick}
              >
                <span className="text-white bg-black bg-opacity-50 p-2 rounded-full">
                  Upload Image
                </span>
              </button>
              {errors.image && <p className="text-red-500 text-xs italic">{errors.image}</p>}
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6">
                <label
                  htmlFor="address"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Address"
                />
                {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
              </div>
              <div className="w-full px-3 mb-6">
                <label
                  htmlFor="blood"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Blood Group
                </label>
                <input
                  type="text"
                  id="blood"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Blood Group"
                />
                {errors.bloodGroup && <p className="text-red-500 text-xs italic">{errors.bloodGroup}</p>}
              </div>
              <div className="w-full px-3 mb-6">
                <label
                  htmlFor="city"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="City"
                />
                {errors.city && <p className="text-red-500 text-xs italic">{errors.city}</p>}
              </div>
              <div className="w-full px-3 mb-6">
                <label
                  htmlFor="country"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Country"
                />
                {errors.country && <p className="text-red-500 text-xs italic">{errors.country}</p>}
              </div>
              <div className="w-full px-3 mb-6">
                <label
                  htmlFor="phone"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Phone"
                />
                {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
              </div>

              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Gender
                </label>
                <div className="flex">
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="mr-1"
                    />
                    Male
                  </label>
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="mr-1"
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      className="mr-1"
                    />
                    Other
                  </label>
                </div>
                {errors.gender && <p className="text-red-500 text-xs italic">{errors.gender}</p>}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Birthdate
                </label>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    id="day"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="DD"
                  />
                  <input
                    type="text"
                    id="month"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="MM"
                  />
                  <input
                    type="text"
                    id="year"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="YYYY"
                  />
                </div>
                {errors.day && <p className="text-red text-xs italic">{errors.day}</p>}
                {errors.month && <p className="text-red text-xs italic">{errors.month}</p>}
                {errors.year && <p className="text-red text-xs italic">{errors.year}</p>}
              </div>
              <div className="w-full px-3 mb-6">
                <label
                  htmlFor="nationality"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Nationality
                </label>
                <select
                  id="nationality"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="">Select Nationality</option>
                  <option value="American">American</option>
                  <option value="Canadian">Canadian</option>
                  <option value="British">British</option>
                  {/* Add more nationalities as needed */}
                </select>
                {errors.nationality && <p className="text-red-500 text-xs italic">{errors.nationality}</p>}
              </div>
            </div>
          </fieldset>

          <div className="flex gap-10 justify-center mt-2">
            <button
              type="button"
              className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-seagreen to-seagreen-200 text-white hover:font-bold rounded-full mt-4 lg:mt-0 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-seagreen to-seagreen-200 text-white hover:font-bold rounded-full mt-4 lg:mt-0 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
