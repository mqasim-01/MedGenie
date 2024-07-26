// App.js

import React from 'react';
import Footer from './components/footer';
import LandingPage from './components/landingpage';
import DoctorProfile from './doctor/view/doctorprofile';





function App() {

  return (
    <div className="App">

      {/* <LandingPage/>

      <Footer /> */}

      <DoctorProfile/>

    </div>
  );
}

export default App;
