import { useContext, useEffect, useRef } from "react";
import welcomePageImage from "./Assets/hero_image.png";
import { shopContext } from "../Context/ShopContext";
import { motion, useAnimation, useInView } from "framer-motion";

const Hero = () => {
  const { refs } = useContext(shopContext);
  const clickHandler = () => {
    refs.newCollectionsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const heroVariants = {
    hidden: { opacity: 0, x: -75 }, // Move from left to right (for the div)
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 },
      x: 0, // Start position (for both div and image)
    },
  };

  const imgVariants = {
    hidden: { opacity: 0, x: 75 }, // Move from right to left (for the image)
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 },
      x: 0, // Start position (for both div and image)
    },
  };

  return (
    <div
      ref={ref}
      className="flex justify-center sm:flex-row flex-col py-5 sm:py-5 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 md:px-24 items-center"
    >
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate={mainControls}
        className="text-left sm:w-1/2 flex flex-col justify-center items-center"
      >
        <div className="my-auto">
          <span>
            <p className="text-lg font-semibold mb-2">NEW ARRIVALS ONLY</p>
          </span>
          <span>
            <h1 className="text-4xl sm:text-7xl font-semibold mb-2">👋new</h1>
            <h1 className="text-4xl sm:text-7xl font-semibold mb-2">
              collections
            </h1>
            <h1 className="text-4xl sm:text-7xl font-semibold mb-4">
              for everyone
            </h1>
          </span>
          <button
            onClick={clickHandler}
            className="flex select-none mt-10 items-center gap-2 rounded-full py-2 px-4 sm:py-3 sm:px-6 text-center align-middle text-sm sm:text-base font-bold uppercase text-white transition-all bg-red-600 hover:bg-pink-500 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            Latest Collection
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
      </motion.div>
      <motion.div variants={imgVariants} initial="hidden" animate="visible">
        <img
          src={welcomePageImage}
          alt="image"
          className="mt-4 sm:mt-0 max-w-xs"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
