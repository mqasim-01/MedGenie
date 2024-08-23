import React, { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
  } from "firebase/auth";
  import { auth, db } from "../firebase"; // Import from MedGinie firebase.js
import { toast, ToastContainer } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";

const AddNewAdmin = ({ closePopup }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission, such as an API call
    console.log("Admin added:", { password, email });
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
          await setDoc(doc(db, "admins", user.uid), {
            email: user.email,
            photo: "",
            role: "Admin"  
          });
          toast.success("Admin Add Successfully!!", {
            position: "top-center",
          });
        
        }
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
        });
      }
      closePopup();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">Add New Admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={closePopup}
              className="bg-darkgray text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-darkgray text-white px-4 py-2 rounded"
            >
              Add Admin
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddNewAdmin;
