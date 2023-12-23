import React, { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import ShowCase from "../Components/ShowCase";
import banner_kids from "../Components/Assets/banner_kids.png";
import banner_men from "../Components/Assets/banner_mens.png";
import banner_women from "../Components/Assets/banner_women.png";

const ShopCategoriePage = (props) => {
  const { all_product } = useContext(shopContext);
  let customisedProducts;
  let banner;

  if (props.category) {
    customisedProducts = all_product.filter(
      (product) => product.category === props.category
    );
    if (props.category === "men") {
      banner = banner_men;
    } else if (props.category === "women") {
      banner = banner_women;
    } else if (props.category === "kids") {
      banner = banner_kids;
    }
  }

  return (
    <div className="flex flex-col">
      <img
        src={banner}
        alt="welcomePageImage"
        className="mt-10 bg-slate-600 sm:w-full w-xl"
      />
      <ShowCase items={customisedProducts}></ShowCase>
    </div>
  );
};

export default ShopCategoriePage;
