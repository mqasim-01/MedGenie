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

const DoctorSignUpForm = () => {
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
        await setDoc(doc(db, "Doctors", user.uid), {
          email: user.email,
          name: name,
          photo: "",
        });
        toast.success("User Registered Successfully!!", {
          position: "top-center",
        });
        navigate("/doctor-signin");
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900">
      <div className="md:w-auto w-[90%] p-8 rounded-xl m-4 flex flex-col items-center shadow-lg shadow-cyan-300 border border-cyan-400 bg-white/2 backdrop-blur-lg opacity-90">
        <div className="flex justify-center">
          <div className="h-[90%] w-full md:w-3/4 m-4">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
              <h1 className="font-semibold text-3xl text-white m-2">Sign Up</h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-slate-700 shadow-lg rounded-lg px-5 py-2 focus:border border-cyan-400 focus:outline-none text-zinc-300 placeholder:text-zinc-300 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-slate-700 shadow-lg rounded-lg px-5 py-2 focus:border border-cyan-400 focus:outline-none text-zinc-300 placeholder:text-zinc-300 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-slate-700 shadow-lg rounded-lg px-5 py-2 focus:border border-cyan-400 focus:outline-none text-zinc-300 placeholder:text-zinc-300 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-slate-700 shadow-lg rounded-lg px-5 py-2 focus:border border-cyan-400 focus:outline-none text-zinc-300 placeholder:text-zinc-300 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  value={cpass}
                  onChange={(e) => setcPass(e.target.value)}
                />
              </div>
              <div className="flex space-x-2 -ml-28 md:-ml-40 lg:-ml-52">
                <input type="checkbox" id="checkbox" name="checkbox" />
                <h3 className="text-sm font-semibold text-zinc-300 -mt-1 cursor-pointer">Remember Me</h3>
              </div>
            </div>
            <div className="text-center mt-7 flex justify-center">
              <button
                onClick={handleSignup}
                className="uppercase rounded-lg hover:before:bg-redborder-red-500 relative h-[40px] w-80 overflow-hidden border border-cyan-500 bg-slate-700 px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-cyan-500 before:transition-all before:duration-500 hover:font-bold hover:shadow-cyan-500 hover:before:left-0 hover:before:w-full">
                <span className="relative z-10">sign up</span>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center my-6 flex flex-col">
          <div className="text-sm font-bold text-zinc-300">
            Already have an account? 
            <Link className='hover:text-cyan-400 m-1' to='/doctor-signin'>
              login
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DoctorSignUpForm;
