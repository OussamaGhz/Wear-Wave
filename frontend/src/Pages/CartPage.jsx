import React, { useContext } from "react";
import { shopContext } from "../Context/ShopContext";

const CartPage = () => {
  const { cartItems, decreaseItem, removeItem, increaseItem } =
    useContext(shopContext);
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
      id: item.id,
      image: item.image,
      title: item.name,
      price: finalPrice,
      quantity: item.qty,
      total: total,
    };
  });

  const onButtonRemoveClicked = (id) => {
    removeItem(id);
  };

  const increaseQuantity = (id) => {
    increaseItem(id);
  };
  const decreaseQuantity = (id) => {
    decreaseItem(id);
  };

  return (
    <div className="w-10/12 mx-auto mt-10">
      <div className=" overflow-x-auto">
        {cartItems.length === 0 ? (
          <div className="text-center">Your cart seems to be empty</div>
        ) : (
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
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center flex items-center  justify-center gap-2">
                    <button
                      className="bg-green-500 text-white font-bold py-1 px-2 rounded hover:bg-green-600"
                      onClick={() => increaseQuantity(product.id)}
                    >
                      +
                    </button>
                    {product.quantity}
                    <button
                      className="bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-600"
                      onClick={() => decreaseQuantity(product.id)}
                      disabled={product.quantity <= 1}
                    >
                      -
                    </button>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                    ${product.total}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => {
                        onButtonRemoveClicked(product.id);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="flex justify-between items-center mt-10 md:flex-row flex-col">
        <div className="md:w-1/2 w-full m-5">
          <h1 className="text-2xl font-extrabold">Cart Totals</h1>
          <div>
            <div className="flex justify-between items-center border-b-2 py-2">
              <span>Subtotal</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between items-center border-b-2 py-2">
              <span>Shipping Fee</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between items-center border-b-2 py-2 font-bold">
              <span>Total</span>
              <span>$0</span>
            </div>
          </div>
          <button className="flex select-none mt-10 items-center gap-2 rounded-full py-2 px-4 sm:py-3 sm:px-6 text-center align-middle text-sm sm:text-base font-bold uppercase text-white transition-all bg-red-600 hover:bg-pink-500 active:bg-pink-500/30 md:ml-auto">
            Submit
          </button>
        </div>
        <div className="md:w-1/2 w-full flex sm:flex-col justify-start align-top items-center gap-3">
          <p className="text-left font-semibold">
            If you have a promo code, entre it here:{" "}
          </p>
          <div className="flex flex-col md:block">
            <input
              type="text"
              placeholder="Promo Code"
              className="md:rounded-l-full py-3 leading-none px-5 lg:px-7 md:border-2 border-r-0 rounded-none md:mb-4"
            />
            <button className="py-3 px-5 lg:px-7 text-sm font-semibold rounded-full md:rounded-l-none  border border-gray-200 hover:bg-gray-700 dark:bg-gray-800 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
