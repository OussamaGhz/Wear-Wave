import React, { useRef, useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changeHandler = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitHandler = () => {
    setIsSubmitting(true);

    if (!validateEmail(email) || email === "") {
      setFeedback(
        <p className="text-red-500 font-bold mt-2">
          Please enter a valid email address
        </p>
      );
    } else {
      setFeedback(
        <p className="text-green-500 font-bold mt-2">
          Thank you for subscribing to our newsletter
        </p>
      );
      setEmail("");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="p-6 container w-full sm:mx-52 sm:p-20 rounded-2xl md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between bg-gradient-to-b from-pink-300 via-purple-300 to-transparent">
      {/* texts div */}
      <div className="text-center">
        <h1 className="text-4xl sm:leading-normal leading-tight font-bold">
          Get Exclusive Offers On You Email
        </h1>
        <p className="font-medium text-lg">
          Subscribe to our newsletter and stay updated
        </p>
      </div>
      {/* form div */}
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={submitHandler}
      >
        <div className="flex items-stretch mt-12">
          <input
            value={email}
            className="bg-gray-100 md:w-96 rounded-full rounded-r-none text-base leading-none p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
            type="email"
            placeholder="Your Email"
            onChange={changeHandler}
          />
          <button
            className={`flex mx-auto rounded-l-none justify-around justify-self-center select-none items-center gap-2 rounded-full py-2 px-4 sm:py-3 sm:px-6 text-center align-middle text-sm sm:text-base font-bold uppercase text-white transition-all ${
              isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-600 hover:bg-pink-500 active:bg-pink-500/30"
            }`}
            type="button"
            data-ripple-dark="true"
            onClick={!isSubmitting ? submitHandler : null}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Subscribe"}
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
        {feedback}
      </form>
    </div>
  );
};

export default NewsLetter;
