import React from "react";
import img from "./images/image.jpg";
import fb from "./images/facebook.png";
import goo from "./images/google.png";

const Mini5 = () => {
  return (
    <div>
      {/* Globle Container */}
      <div className="flex min-h-screen items-center justify-center bg-red-50">
        {/* Card Container */}
        <div className="relative m-6 flex flex-col space-y-10  rounded-2xl bg-white shadow-2xl  md:m-0 md:skew-y-0 md:flex-row">
          {/* Left Side */}
          <div className="p-6 md:p-20">
            {/* Top Content */}
            <h2 className="font-mono2 mb-5 text-4xl font-bold">Log In</h2>
            <p className="font-sans2 mb-12 max-w-sm font-light text-gray-600 ">
              Log in to your account to upload or download pictures, videos or
              music.
            </p>
            <input
              type="text"
              className=" placeholder:font-sans2 w-full rounded-md border border-gray-300 p-6 placeholder:font-light "
              placeholder="Enter Your Email Address"
            />
            {/* Middle Content */}
            <div className="mt-6 flex  flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 ">
              <div className="font-medium text-cyan-700 ">Forgot Password</div>
              <button className="font-sans2 shadow-sg flex w-full items-center justify-center space-x-4 rounded-md border bg-cyan-700 p-6 px-9 font-bold text-white shadow-cyan-100 transition duration-150 hover:-translate-y-0.5 hover:bg-opacity-90 hover:shadow-lg md:w-auto">
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-7"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="13" y1="18" x2="19" y2="12" />
                  <line x1="13" y1="6" x2="19" y2="12" />
                </svg>
              </button>
            </div>

            {/* Border */}
            <div className="mt-12 border-b border-b-gray-300"></div>

            {/* Bottom Content */}
            <p className="py-6  text-center text-sm font-thin text-gray-400">
              or log in with
            </p>

            {/* Bottom Button Container */}
            <div className="flex flex-col space-y-6 md:flex-row md:space-x-4 md:space-y-0 ">
              <button className="flex items-center justify-center space-x-3 rounded border border-gray-300 py-2 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:opacity-30 hover:shadow-lg md:w-1/2">
                <img src={fb} alt="" className="w-9" />
                <span className="font-thin">Facebook</span>
              </button>
              <button className="flex items-center justify-center space-x-3 rounded border border-gray-300 py-2 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:opacity-30 hover:shadow-lg md:w-1/2">
                <img src={goo} alt="" className="w-9" />
                <span className="font-thin">Google</span>
              </button>
            </div>
          </div>

          {/* Right Side */}
          <img src={img} alt="" className="hidden w-[430px] md:block" />

          {/* Close Button */}
          <div className="right-4 group absolute -top-5 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:translate-y-0.5 transition duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-black group-hover:text-gray-600"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mini5;
