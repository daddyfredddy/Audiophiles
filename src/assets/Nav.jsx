// import React from "react";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-black">
      <div className="flex flex-col gap-1 md:flex-row md:justify-between bg-black items-center py-8 w-10/12 mx-auto">
        {/* <IoReorderThree className="text-white w-4 h-4" /> */}
        <>
          <h1 className="text-white font-bold text-2xl">audiophile</h1>
        </>
        <ul className="text-white flex gap-4 text-xs font-bold font-fonty">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/headphones">
            <li>HEADHONES</li>
          </Link>
          <Link to="speakers">
            <li>SPEAKERS</li>
          </Link>
          <Link to="earphones">
            <li>EARPHONES</li>
          </Link>
        </ul>
        <Link to="cart">
          <img
            src="/resources/assets/shared/desktop/icon-cart.svg"
            alt="cart"
            className="w-6 h-5"
          />
        </Link>
      </div>
      <hr className="w-10/12 h-px mx-auto border border-kalas8 " />
    </div>
  );
}

export default Nav;
