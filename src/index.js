import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PatientSignUpForm from './patient/auth/PatientSignUp';
import PatientSignInForm from './patient/auth/PatientSignIn';
import DoctorSignInForm from './doctor/auth/DoctorSignIn';
import DoctorSignUpForm from './doctor/auth/DoctorSignUp';
import DoctorInformation from './doctor/view/doctorprofileform';
import PatientInformation from './patient/view/patientprofileform';
import DoctorDashboard from './doctor/dashboard';
import PatientDashboard from './patient/dashboard';
import AdminLogin from './admin/adminlogin';
import DoctorProfile from './doctor/view/doctorprofile';
import PatientProfile from './patient/view/patientprofile';


const root = ReactDOM.createRoot(document.getElementById('root'));
let allroutes = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/patient-signin',
      element:<PatientSignInForm/>
    },
    {
      path:'/patient-signup',
      element:<PatientSignUpForm/>
    },
    {
      path:'/doctor-signin',
      element:<DoctorSignInForm/>
    },
    {
      path:'/doctor-signup',
      element:<DoctorSignUpForm/>
    },
    {
      path:'/doctor-profileform',
      element:<DoctorInformation/>
    },
    {
      path:'/patient-profileform',
      element:<PatientInformation/>
    },
    {
      path:'/doctordashboard',
      element:<DoctorDashboard/>
    },
    {
      path:'/patientdashboard',
      element:<PatientDashboard/>
    },
    {
      path:'/admin-login',
      element:<AdminLogin/>
    },
    {
      path:'/doctor-profile',
      element:<DoctorProfile/>
    },
    {
      path:'/patient-profile',
      element:<PatientProfile/>
    },
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allroutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
