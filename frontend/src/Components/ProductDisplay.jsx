import React, { useContext, useEffect, useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import { shopContext } from "../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const [size, setSize] = useState("S");
  const [item, setItem] = useState({size: size, ...product});
  
  const changeHandler = (e) => {
    setSize(e.target.value);
    let newProduct = {...product};
    newProduct["size"] = e.target.value;
    setItem(newProduct);
  };
  
  const { addItem } = useContext(shopContext);
  const clickHandler = () => {
    addItem(item);
  };

  return (
    <div className="w-full xl:w-5/6 flex max-h-screen sm:p-20 flex-col sm:flex-row p-5 gap-4">
      <div className="flex gap-3 sm:w-1/2">
        <div className="flex flex-col gap-3">
          <img
            src={product.image}
            alt="produtImg"
            className="w-40 h-1/4 sm:hover:scale-125 transition-all"
          />
          <img
            src={product.image}
            alt="p rodutImg"
            className="w-40 h-1/4 sm:hover:scale-125 transition-all"
          />
          <img
            src={product.image}
            alt="produtImg"
            className="w-40 h-1/4 sm:hover:scale-125 transition-all"
          />
          <img
            src={product.image}
            alt="produtImg"
            className="w-40 h-1/4 sm:hover:scale-125 transition-all"
          />
        </div>
        <img
          src={product.image}
          alt="produtImg"
          className="w-5/6 h-full sm:hover:scale-105 transition-all"
        />
      </div>
      <div className="w-full  sm:w-1/2 flex flex-col sm:px-10 justify-between">
        <span className="my-2">
          <h1 className="text-3xl font-semiboldbold">{product.name}</h1>
          <Rating name="read-only" value={product.rate} readOnly />
        </span>
        <span className="flex gap-9 my-2">
          <p className="text-xl line-through">${product.old_price}</p>
          <p className="text-xl text-orange-800 font-bold">
            ${product.new_price}
          </p>
        </span>
        <p className="my-2">
          Our elegant and comfortable is designed to enhance your style and
          ensure maximum comfort. Featuring a durable and long-lasting
          construction, it will remain a fashionable and reliable choice for
          years to come.
        </p>
        <span className="my-2">
          <label htmlFor="sizes">Select Size</label>
          <select
            onChange={changeHandler}
            id="sizeSelect"
            className="block appearance-none w-full bg-white border border-gray-300 p-2 rounded-md focus:outline-none focus:border-orange-500"
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </span>
        <button
          onClick={clickHandler}
          className="py-3 px-5 my-2 lg:px-12 text-sm font-semibold rounded-full border border-gray-200 hover:bg-gray-700 dark:bg-gray-800 text-white"
        >
          Add to cart
        </button>
        <span className="my-2">
          <p className="text-lg">Category: {product.category}</p>
          <p className="text-lg">Tags: Modern, Latest</p>
        </span>
      </div>
    </div>
  );
};

export default ProductDisplay;
