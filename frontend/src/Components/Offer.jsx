import React from "react";
import offerPic from "./Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="flex justify-between items-center w-full sm:w-auto sm:mx-52  md p-10 rounded-2xl bg-gradient-to-b from-pink-300 via-purple-300 to-transparent">
      <div className="text-center sm:text-left">
        <h1 className="text-6xl sm:leading-normal leading-tight font-bold">
          Exlusive Offers For You
        </h1>
        <p className="font-semibold">ONLY ON BEST SELLERS PRODUCTS</p>
        <button
          className="flex mx-auto  justify-around justify-self-center select-none mt-10 items-center gap-2 rounded-full py-2 px-4 sm:py-3 sm:px-6 text-center align-middle text-sm sm:text-base font-bold uppercase text-white transition-all bg-red-600 hover:bg-pink-500 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-dark="true"
        >
          Check Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button> 
      </div>
      <img src={offerPic} alt="welcomePageImage" className="max-w-xs sm:block hidden"/>
    </div>
  );
};

export default Offer;
