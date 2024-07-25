import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Adjust the path as needed
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import assets from '../../assets/images';


function PatientSignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user.emailVerified) {
        toast.success("Login Successful!", {
          position: "top-center",
        });
<<<<<<< HEAD
        navigate("/patient-profile"); // redirect to the homepage or another protected route
=======
        navigate("/patientdashboard"); // redirect to the homepage or another protected route
>>>>>>> 72dd6dc32ff69d70bacfad1743522a7c874a1cd8
      } else {
        toast.error("Please verify your email before logging in.", {
          position: "top-center",
        });
        auth.signOut();
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };


  return (
    <div className="h-[100vh] items-center bg-gray flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-gradient-to-tr from-gray to-seagreen-200 border-2 shadow shadow-darkgray sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-seagreen text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${assets.Patient})`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Sign In as Patient
              </h1>
              <br />
              <p className="text-[12px] text-gray-500">
                Hey! Please enter your details to Sign In
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="text-right"><p className="hover:underline">forget password?</p></div>
                <button 
                onClick={handleLogin}
                className="mt-5 tracking-wide  font-semibold bg-gradient-to-r from-seagreen to-seagreen-200 text-gray hover:underline hover:font-bold w-full py-4 rounded-lg tarnsform transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign In</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Don't have an account?
                  <Link to='/patient-signup'>
                    <span className="text-seagreen hover:underline font-semibold">Sign up</span>
                    </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default PatientSignInForm;
