import React from "react";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
import CheckoutCart from "./CheckoutCart";
import { LogoIcon } from "./Icons";

export default function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="max-w-6xl mx-auto flex p-5 flex items-center justify-between">
        <Link to="/" className="flex title-font font-medium items-center text-white">
          <span className="flex items-center justify-center ml-3 text-xl">
            <LogoIcon />
            <span className="hidden md:inline-block py-1 px-2 text-white text-2xl font-medium tracking-wider">
              E-Commerce React
            </span>
          </span>
        </Link>
        <div className="flex flex-col items-end gap-y-2 sm:flex-row sm:items-center">
          <CartSummary />
          <CheckoutCart />
        </div>

      </div>
    </header>
  );
}
