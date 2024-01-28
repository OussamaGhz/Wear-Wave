// Item.jsx
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Item = (props) => {
  const animate = useAnimation();
  const ref = useRef(null);
  const view = useInView(ref);
  useEffect(() => {
    if (view) {
      animate.start("visible");
    }
  }, [view]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }, 
      }}
      initial="hidden"
      animate={animate}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="card card-compact w-auto p-10 bg-base-100 shadow-xl flex-1 font-semibold hover:scale-105 transition-all ease-out delay-30000 h-96"
    >
      <figure>
        <img
          src={props.image}
          alt="Image"
          className="w-full h-auto object-cover"
        />
      </figure>
      <div className="card-body text-center">
        <div>
          <p>{props.name}</p>
        </div>
        <div className="flex gap-4 mt-2 justify-center">
          <p>${props.newPrice}</p>
          <p className="line-through font-light">${props.oldPrice}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Item;
