// import React from "react";
import { Link } from "react-router-dom";

function Aside() {
  return (
    <div className="flex h-screen relative">
      <img
        src="/resources/assets/home/desktop/image-hero.jpg"
        className="w-full h-full object-cover"
      />
      <div className="w-80 absolute top-32 ml-24">
        <p className="text-white text-base font-fonty tracking-widest ">
          NEW PRODUCT
        </p>
        <h1 className="text-white text-2xl absolute top-10">XX99 MARK II</h1>
        <h1 className="text-white text-2xl absolute top-16">HEADPHONES</h1>
        <p className="text-white absolute top-32">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast
        </p>
        <Link to="/Headphones1">
          <button className="text-white bg-kalas1 absolute top-56 px-4 py-3 text-xs">
            SEE PRODUCT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Aside;
