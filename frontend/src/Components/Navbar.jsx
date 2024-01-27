import React, { useContext, useState } from "react";
import logo from "./Assets/logo.png";
import cart from "./Assets/cart_icon.png";
import { NavLink, Link } from "react-router-dom";
import { shopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { nbItems } = useContext(shopContext);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  return (
    <nav className="min-w-screen-sm flex justify-between sm:justify-between items-center text-base w-full px-3 lg:text-lg">
      <Link to="/" className="flex items-center gap-2 font-bold">
        <img src={logo} alt="logo" />
        <h1 className="text-3xl hidden sm:block">SHOOPER</h1>
      </Link>
      {/* Hamburger menu for small screens */}
      <div className="sm:hidden relative">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation items - displayed vertically */}
        <ul
          className={`flex flex-col items-center gap-4 font-semibold absolute top-full right-6 transition-all ease-linear delay-200 ${
            menuVisible ? "flex" : "hidden"
          } sm:hidden bg-white w-auto p-3 rounded shadow-md contai`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-transparent transition duration-500 ease-in-out border-b-orange-600 border-b-4 border-b-solid text-red-800"
                  : "border-transparent transition duration-500 ease-in-out active:border-b-orange-600 active:border-b-4 active:border-b-solid hover:text-orange-600 hover:border-b-4 hover:border-b-solid"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="men"
              className={({ isActive }) =>
                isActive
                  ? "border-transparent transition duration-500 ease-in-out border-b-orange-600 border-b-4 border-b-solid text-red-800"
                  : "border-transparent transition duration-500 ease-in-out active:border-b-orange-600 active:border-b-4 active:border-b-solid hover:text-orange-600 hover:border-b-4 hover:border-b-solid"
              }
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              to="women"
              className={({ isActive }) =>
                isActive
                  ? "border-transparent transition duration-500 ease-in-out border-b-orange-600 border-b-4 border-b-solid text-red-800"
                  : "border-transparent transition duration-500 ease-in-out active:border-b-orange-600 active:border-b-4 active:border-b-solid hover:text-orange-600 hover:border-b-4 hover:border-b-solid"
              }
            >
              Women
            </NavLink>
          </li>
          <li>
            <NavLink
              to="kids"
              className={({ isActive }) =>
                isActive
                  ? "border-transparent transition duration-500 ease-in-out border-b-orange-600 border-b-4 border-b-solid text-red-800"
                  : "border-transparent transition duration-500 ease-in-out active:border-b-orange-600 active:border-b-4 active:border-b-solid hover:text-orange-600 hover:border-b-4 hover:border-b-solid"
              }
            >
              Kids
            </NavLink>
          </li>
          <NavLink
            to="/signup"
            className="py-3 px-5 lg:px-12 text-sm font-semibold rounded-full border border-gray-200 hover:bg-gray-700 dark:bg-gray-800 text-white"
          >
            Signup
          </NavLink>
          <NavLink
            to="/login"
            className="py-3 px-5 lg:px-12 text-sm font-semibold rounded-full border border-gray-200 hover:bg-gray-700 dark:bg-gray-800 text-white"
          >
            Login
          </NavLink>
          <div className="relative">
            <button>
              <Link to="cart">
                <img src={cart} alt="cart-icon" />
                {/* Cart counter */}
                <div className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="text-xs font-semibold">2</span>
                </div>
              </Link>
            </button>
          </div>
        </ul>
      </div>
      {/* Navigation items - displayed horizontally on normal screens */}
      <ul className="hidden sm:flex gap-8 font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-transparent transition duration-500 ease-in-out border-b-orange-600 border-b-4 border-b-solid text-red-800"
                : "border-transparent transition duration-500 ease-in-out active:border-b-orange-600 active:border-b-4 active:border-b-solid hover:text-orange-600 hover:border-b-4 hover:border-b-solid"
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="men"
            className={({ isActive }) =>
              isActive
                ? "border-transparent transition duration-500 ease-in-out border-b-orange-600 border-b-4 border-b-solid text-red-800"
                : "border-transparent transition duration-500 ease-in-out active:border-b-orange-600 active:border-b-4 active:border-b-solid hover:text-orange-600 hover:border-b-4 hover:border-b-solid"
            }
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            to="women"
            className={({ isActive }) =>
              isActive
                ? "border-transparent transition duration-500 ease-in-out border-b-orange-600 border-b-4 border-b-solid text-red-800"
                : "border-transparent transition duration-500 ease-in-out active:border-b-orange-600 active:border-b-4 active:border-b-solid hover:text-orange-600 hover:border-b-4 hover:border-b-solid"
            }
          >
            Women
          </NavLink>
        </li>
        <li>
          <NavLink
            to="kids"
            className={({ isActive }) =>
              isActive
                ? "border-transparent transition duration-500 ease-in-out border-b-orange-600 border-b-4 border-b-solid text-red-800"
                : "border-transparent transition duration-500 ease-in-out active:border-b-orange-600 active:border-b-4 active:border-b-solid hover:text-orange-600 hover:border-b-4 hover:border-b-solid"
            }
          >
            Kids
          </NavLink>
        </li>
      </ul>
      {/* Login and cart for normal screens */}
      <div className="hidden sm:flex gap-2   items-center relative">
        {/* Login button - visible on normal screens */}
        <NavLink
          to="/signup"
          className="py-2 px-5 lg:px-7 text-sm font-semibold rounded-full border border-gray-200 hover:bg-gray-700 dark:bg-gray-800 text-white"
        >
          Signup
        </NavLink>
        <NavLink
          to="/login"
          className="py-2 px-5 lg:px-7 text-sm font-semibold rounded-full border border-gray-200 hover:bg-gray-700 dark:bg-gray-800 text-white"
        >
          Login
        </NavLink>
        <div className="relative">
          <button>
            <Link to="cart">
              <img src={cart} alt="cart-icon" />
              {/* Cart counter */}
              <div className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                <span className="text-xs font-semibold">{nbItems}</span>
              </div>
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
