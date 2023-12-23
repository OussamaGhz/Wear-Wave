// Popular.jsx
import React from "react";
import products from "../Components/Assets/data";
import ShowCase from "./ShowCase";

const Popular = () => {
  return (
    <>
      <ShowCase title={'Popular For Women'} items={products}/>
    </>
  );
};

export default Popular;
