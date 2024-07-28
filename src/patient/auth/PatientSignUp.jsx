import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../../firebase"; // Import from MedGinie firebase.js
import { toast, ToastContainer } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import assets from "../../assets/images";

function PatientSignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpass, setcPass] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== cpass) {
      toast.error("Passwords do not match", {
        position: "top-center",
      });
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.",
        {
          position: "top-center",
        }
      );
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        await sendEmailVerification(user);
        toast.success("Verification email sent. Please verify your email.", {
          position: "top-center",
        });
        await setDoc(doc(db, "Patients", user.uid), {
          email: user.email,
          name: name,
          photo: "",
          role: "Patient"  // Add role field here
        });
        toast.success("User Registered Successfully!!", {
          position: "top-center",
        });
        navigate("/patient-signin");
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
                Sign Up as Patient
              </h1>
              <br />
              <p className="text-[12px] text-gray-500">
                Hey! Please enter your details to Sign Up
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Confirm Password"
                  value={cpass}
                  onChange={(e) => setcPass(e.target.value)}
                />

                <button
                  onClick={handleSignup}
                  className="mt-5 tracking-wide  font-semibold bg-gradient-to-r from-seagreen to-seagreen-200 text-gray hover:underline hover:font-bold w-full py-4 rounded-lg tarnsform transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
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
                  <span className="ml-3">Sign Up</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account
                  <Link to="/patient-signin">
                    <span className="text-seagreen hover:underline font-semibold">
                      Sign In
                    </span>
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
}
export default PatientSignUpForm;
