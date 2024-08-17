import React, { useEffect, useState } from "react";
import assets from "../../assets/images";
import { Link } from "react-router-dom";
import { db, auth } from "../../firebase"; 
import { doc, getDoc } from "firebase/firestore";


export default function DoctorProfile() {
  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          throw new Error("User not authenticated");
        }
        const docRef = doc(db, "Doctors", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDoctorData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red">Error: {error}</div>;
  }
  return (
    <>
      
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                    <img
                        alt="profile"
                        src={doctorData?.photo || assets.Profile}
                        className="shadow-xl rounded-full h-32 w-32 object-cover border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px", borderRadius: "50%" }}
                      />
                    </div>
                  </div>
                  
                  
                </div>
                <div className="text-center mt-20">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                    {doctorData?.name || "Name"}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    {doctorData?.address || "Address"}
                  </div>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    {doctorData?.phone || "Phone Number"}
                  </div>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    {doctorData?.nationality || "Nationality"}
                  </div>
                  
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    {doctorData?.gender || "Gender"}
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    {doctorData?.specialization || "Specialization"}
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    {doctorData?.institute || "University"}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      {doctorData?.description || "Description"}
                      </p>
                      <p>
                      {doctorData?.checkupStartTime || "starttime"}{doctorData?.checkupEndTime || "endtime"}
                      </p>
                      <p>
                      {doctorData?.days || "CheckUp Days"}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                  <div className="py-6 px-3 sm:mx-2">
                    <Link to="/doctor-addinformation">
                      <button
                        className="bg-gradient-to-r from-seablue to-seablue-200 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                      >
                        Add
                      </button>
                    </Link>
                  </div>
                  <div className="py-6 px-3 sm:mx-2">
                    <Link to="/doctor-profileform">
                      <button
                        className="bg-gradient-to-r from-seablue to-seablue-200 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                      >
                        Edit
                      </button>
                    </Link>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
