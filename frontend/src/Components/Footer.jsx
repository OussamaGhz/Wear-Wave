import React from "react";
import { Link } from "react-router-dom";
import logo from "./Assets/logo.png";
import instagramLogo from "./Assets/instagram_icon.png";
import whatsappLogo from "./Assets/whatsapp_icon.png";
import pintesteLogo from "./Assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className="my-20 flex flex-col gap-6 items-center w-3/4 sm:w-full mx-auto">
      <div className="flex items-center gap-2 font-bold">
        <img src={logo} alt="logo" />
        <h1 className="text-3xl">SHOOPER</h1>
      </div>
      <ul className="flex items-center gap-6">
        <Link className="font-medium transition-colors hover:text-blue-500 focus:text-blue-500">Company</Link>
        <Link className="font-medium transition-colors hover:text-blue-500 focus:text-blue-500">Products</Link>
        <Link className="font-medium transition-colors hover:text-blue-500 focus:text-blue-500">Offices</Link>
        <Link className="font-medium transition-colors hover:text-blue-500 focus:text-blue-500">About</Link>
        <Link className="font-medium transition-colors hover:text-blue-500 focus:text-blue-500">Contact</Link>
      </ul>
      <div className="flex gap-2">
        <Link className="border-1 border-gray-900 p-2">
          <img src={instagramLogo} alt="instagramLogo"/>
        </Link>
        <Link className="border-1 border-gray-900 p-2">
          <img src={whatsappLogo} alt="whatsappLogo" />
        </Link>
        <Link className="border-1 border-gray-900 p-2">
          <img src={pintesteLogo} alt="pintesteLogo" />
        </Link>
      </div>
      <p>Copyright &copy; - All Right Reserved</p>
    </div>
  );
};

export default Footer;
