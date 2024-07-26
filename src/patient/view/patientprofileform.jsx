import React from "react";
import { useNavigate } from "react-router-dom";

const PatientInformation = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/patientdashboard"); // Navigate to the dashboard
  };

  return (
    <div className="bg-gradient-to-r from-seagreen to-seagreen-200 font-sans">
      <h3 className="w-full my-1 pt-10 text-5xl font-bold leading-tight text-center text-white">
        Profile Information
      </h3>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/4 opacity-25 my-0 py-0 rounded-t"></div>
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
          action="/"
          className="bg-white  rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-auto"
        >
      

          <fieldset className="border-t-2 border-seagreen mt-6">
            <legend>
              <h3 className="text-seagreen mb-2">Personal Details</h3>
            </legend>

            <div className="flex flex-wrap -mx-3 mb-6">

            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  htmlFor="name"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  Name*
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="appearance-none block w-full bg-gray text-darkgray border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  htmlFor="Specialization"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  Blood Group*
                </label>
                <input
                  id="blood"
                  type="text"
                  placeholder="Blood Group"
                  required
                  className="appearance-none block w-full bg-gray text-darkgray border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full px-3 mb-6">
                <label
                  htmlFor="address"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  Adress
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Address"
                  required
                  className="appearance-none block w-full bg-gray text-darkgray border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  htmlFor="state"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  City*
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="State"
                  required
                  className="appearance-none block w-full bg-gray text-darkgray border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  htmlFor="country"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  Country*
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="Country"
                  required
                  className="appearance-none block w-full bg-gray text-darkgray border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  htmlFor="phone"
                  className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                >
                  Phone*
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  required
                  className="appearance-none block w-full bg-gray text-darkgray border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2">
                  Gender*
                </label>
                <div className="flex">
                  <input
                    id="male"
                    type="radio"
                    name="gender"
                    value="male"
                    required
                    className="appearance-auto bg-gray text-darkgray border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  />
                  <label htmlFor="male" className="ml-2">
                    Male
                  </label>
                  <input
                    id="female"
                    type="radio"
                    name="gender"
                    value="female"
                    required
                    className="appearance-auto bg-gray text-darkgray border rounded py-3 px-4 ml-4 leading-tight focus:outline-none focus:bg-white"
                  />
                  <label htmlFor="female" className="ml-2">
                    Female
                  </label>
                </div>
              </div>

              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2">
                  Birthdate*
                </label>
                <div className="flex items-center">
                  <select
                    id="day"
                    required
                    className="appearance-none block w-1/4 bg-gray text-darkgray border rounded py-3 px-4 mr-2 leading-tight focus:outline-none focus:bg-white"
                  >
                    <option value="">Select Day</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  <select
                    id="month"
                    required
                    className="appearance-none block w-2/4 bg-gray text-darkgray border rounded py-3 px-4 mr-2 leading-tight focus:outline-none focus:bg-white"
                  >
                    <option value="">Select Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <input
                    id="year"
                    type="text"
                    placeholder="Year"
                    required
                    className="appearance-auto block w-1/4 bg-gray text-darkgray border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>
              </div>

              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2">
                  Nationality*
                </label>
                <select
                  required
                  className="appearance-auto block w-full bg-gray text-darkgray border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                >
                  <option value="">Select Nationality</option>
                  <option value="Pakistani">Pakistani</option>
                  <option value="Turkish">Turkish</option>
                  <option value="Russian">Russian</option>
                  <option value="German">German</option>
                  <option value="French">French</option>
                  <option value="American">American</option>
                  <option value="English">English</option>
                </select>
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
};

export default PatientInformation;
