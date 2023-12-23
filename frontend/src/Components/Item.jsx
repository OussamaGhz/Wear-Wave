// Item.jsx
import React from "react";

const Item = (props) => {
  return (
    <div className="card card-compact w-auto p-10 bg-base-100 shadow-xl flex-1 font-semibold hover:scale-105 transition-all ease-out delay-30000">
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
    </div>
  );
};

export default Item;
