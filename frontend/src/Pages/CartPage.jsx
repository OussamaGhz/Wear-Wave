import React, { useContext } from "react";
import { shopContext } from "../Context/ShopContext";

const CartPage = () => {
  const { cartItems, removeItem } = useContext(shopContext);
  const displayItems = cartItems.map((item) => {
    // Ensure new_price is a string and then remove the dollar sign
    const priceStr =
      typeof item.new_price === "string"
        ? item.new_price.replace("$", "")
        : item.new_price.toString();

    // Convert the string to a number
    const validPrice = parseFloat(priceStr);

    // Check if the price is a valid number, otherwise default to 0
    const finalPrice = isNaN(validPrice) ? 0 : validPrice;

    // Calculate total
    let total = finalPrice * item.qty;

    return {
      image: item.image,
      title: item.name,
      price: finalPrice,
      quantity: item.qty,
      total: total,
    };
  });

const onButtonRemoveClicked = (e) => {


}

  return (
    <div className="w-10/12 mx-auto mt-10 overflow-x-auto">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Photo
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Title
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider ">
              Price 
            </th> 
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider ">
              Quantity 
            </th> 
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider ">
              Total 
            </th> 
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider ">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {displayItems.map((product, index) => (
            <tr key={index}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <img
                  src={product.image}
                  alt="product-item"
                  className="h-10 w-10 object-cover mx-auto "
                />
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                {product.title}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                ${product.price}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                {product.quantity}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                ${product.total}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <button className="text-red-500 hover:text-red-700" onClick={onButtonRemoveClicked}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartPage;
