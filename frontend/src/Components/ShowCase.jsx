import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

const ShowCase = (props) => {
  return (
    <div className="my-10 mx-16 py-9 px-5 sm:px-20 text-center">
      <p className="text-3xl uppercase font-bold">{props.title}</p>
      <hr className="w-48 h-1 mx-auto mt-4 bg-gray-100 border-0 rounded mb-4 sm:mb-14 dark:bg-gray-700" />
      {props.children}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 ">
        {props.items.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}>
            <Item
              image={item.image}
              id={item.id}
              name={item.name}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowCase;
