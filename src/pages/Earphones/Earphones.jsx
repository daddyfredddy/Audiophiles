// import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Earphones() {
  return (
    <div>
      <div className="h-60 w-full bg-black flex justify-center items-center">
        <h1 className="font-fonty font-bold text-5xl text-white ">EARPHONES</h1>
      </div>
      <div className="mt-40 flex w-10/12 mx-auto items-center">
        <img
          src="public\resources\assets\product-yx1-earphones\desktop\image-category-page-preview.jpg"
          className="h-1/3 max-w-lg max-h-fit bg-red"
        />
        <div className="h-80 ml-60">
          <h3 className="text-kalas1 font-fonty text-xs tracking-widest font-normal">
            NEW PRODUCT
          </h3>
          <h1 className="font-fonty font-bold text-4xl mt-4">YX1 WIRELESS</h1>
          <h1 className="font-fonty font-bold text-4xl">EARPHONES</h1>

          <p className="mt-8">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy enviroments with its active noise cancellation
            feature.
          </p>
          <Link to="/Earphones1">
            <button className="text-white bg-kalas1 absolute px-4 py-3 text-xs mt-8">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:place-items-center md:h-72 bg-white relative text-center mt-32 ">
        <div className="h-52 bg-kalas3 w-72">
          <img
            src="public\resources\assets\shared\desktop\image-category-thumbnail-headphones.png"
            className="h-40 absolute top-0 object-cover ml-16"
          />
          <h1 className="font-bold text-base text-black mt-28">HEADPHONES</h1>
          <div className="flex gap-1 items-center justify-center mt-4">
            <h3>SHOP</h3>
            <IoIosArrowForward className="text-kalas1" />
          </div>
        </div>
        <div className="h-52 bg-kalas3 w-72">
          <img
            src="public\resources\assets\shared\desktop\image-category-thumbnail-speakers.png"
            className="h-40 absolute top-0 object-cover ml-16"
          />
          <h1 className="font-bold text-base text-black mt-28">SPEAKERS</h1>
          <div className="flex gap-1 items-center justify-center mt-4">
            <h3>SHOP</h3>
            <IoIosArrowForward className="text-kalas1" />
          </div>
        </div>
        <div className="h-52 bg-kalas3 w-72">
          <img
            src="public\resources\assets\shared\desktop\image-category-thumbnail-earphones.png"
            className="h-40 absolute top-0 object-cover ml-16"
          />
          <h1 className="font-bold text-base text-black mt-28">EARPHONES</h1>
          <div className="flex gap-1 items-center justify-center mt-4">
            <h3>SHOP</h3>
            <IoIosArrowForward className="text-kalas1" />
          </div>
        </div>
      </div>

      <div className="mt-40 flex w-10/12 mx-auto items-center">
        <div className="h-80">
          <h1 className="font-fonty font-bold text-4xl mt-4">
            BRINGING YOU THE
          </h1>
          <h1 className="font-fonty font-bold text-4xl">
            <span className="text-kalas1">BEST</span>AUDIO GEAR
          </h1>

          <p className="mt-8">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img
          src="public\resources\assets\product-xx99-mark-two-headphones\desktop\image-gallery-1.jpg"
          className="h-1/3 max-w-lg max-h-fit ml-60"
        />
      </div>
    </div>
  );
}

export default Earphones;
