import React from 'react';
import assets from '../assets/images';

const Services = () => {
  return (
    <section className="bg-white py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-darkgray">
          Our Services
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-seablue2 w-1/4 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
    <div className="flex flex-wrap items-center">
      <div className="w-5/6 sm:w-1/2 p-6">
        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
          Make an appointment
        </h3>
        <p className="text-gray-600 mb-8">
        Schedule your appointment today for a thorough checkup and begin your journey towards better health. We wish you a swift recovery and look forward to assisting you.
        </p>
      </div>
      <div className="w-full sm:w-1/2 p-6">
        <img src={assets.Appointment} alt='appointment'/>
      </div>
    </div>
    <div class="flex flex-wrap flex-col-reverse items-center sm:flex-row">
  <div class="w-full sm:w-1/2 p-6 mt-6">
    <img src={assets.ChatBot} alt='chatbot'/>
  </div>
  <div class="w-full sm:w-1/2 p-6 mt-6">
    <div class="classname">
      <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
        ChatBot
      </h3>
      <p class="text-gray-600 mb-8">
      Consult healthcare chatbot for symptoms assessment, disease identification, diet plan development tailored to your condition, and appropriate medication guidance.
        
      </p>
    </div>
  </div>
</div>

    </div>
    </section>
  );
};

export default Services;
