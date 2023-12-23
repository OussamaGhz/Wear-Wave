import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/ProductDisplay";

const ProductPage = (props) => {
  const { all_product } = useContext(shopContext);
  const { productId } = useParams();
  const product = all_product.find((item) => item.id == productId);
  return (
    <div className="flex justify-center items-center">
      <ProductDisplay product={product} />
    </div>
  );
};

export default ProductPage;
