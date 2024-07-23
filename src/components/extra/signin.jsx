import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Adjust the path as needed
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        navigate("/"); // redirect to the homepage or another protected route
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
    <section>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="mx-auto transform justify-center rounded-lg bg-white text-left align-bottom transition-all sm:w-full sm:max-w-2xl sm:align-middle">
          <div className="mx-auto grid grid-cols-1 flex-wrap items-center justify-center rounded-xl shadow-xl lg:grid-cols-2">
            <div className="w-full px-6 py-3">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex w-full items-center">
                    <h3 className="leading-6 text-lg font-bold text-neutral-600 lg:text-5xl">Sign In</h3>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    <p>Sign In and get our newest news.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mt-4 flex flex-col lg:space-y-2">
                  <button
                    type="button"
                    className="flex w-full transform items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={handleLogin}
                  >
                    Sign In
                  </button>
                  <a
                    href="#"
                    className="inline-flex justify-center py-4 text-base font-medium text-gray-500 hover:text-neutral-600 focus:text-blue-600 focus:outline-none sm:text-sm"
                  >
                    Forgot your Password?
                  </a>
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-neutral-600"> Or continue with </span>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="block w-full transform items-center rounded-xl border-2 border-white px-10 py-3.5 text-center text-base font-medium text-blue-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="h-6 w-6" viewBox="0 0 48 48">
                          <defs>
                            <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path>
                          </defs>
                          <clipPath id="b">
                            <use xlinkHref="#a" overflow="visible"></use>
                          </clipPath>
                          <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"></path>
                          <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
                          <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
                          <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path>
                        </svg>
                        <span className="ml-4"> Log in with Google</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-first hidden w-full lg:block">
              <img className="h-full rounded-l-lg bg-cover object-cover" src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default PatientSignInForm;