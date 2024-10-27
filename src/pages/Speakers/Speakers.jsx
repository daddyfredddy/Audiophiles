// import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Speakers() {
  return (
    <div>
      <div className="h-60 w-full bg-black flex justify-center items-center">
        <h1 className="font-fonty font-bold text-5xl text-white ">SPEAKERS</h1>
      </div>
      <div className="mt-40 flex w-10/12 mx-auto items-center">
        <img
          src="public\resources\assets\product-zx9-speaker\desktop\image-category-page-preview.jpg"
          className="h-1/3 max-w-lg max-h-fit bg-red"
        />
        <div className="h-80 ml-60">
          <h3 className="text-kalas1 font-fonty text-xs tracking-widest font-normal">
            NEW PRODUCT
          </h3>
          <h1 className="font-fonty font-bold text-4xl mt-4">ZX9</h1>
          <h1 className="font-fonty font-bold text-4xl">SPEAKER</h1>

          <p className="mt-8">
            Upgrade your sound system with the all new ZX9 active speaker. Its a
            bookshelf speaker system that offers truly wireless connectivity -
            creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <Link to="/Speakers1">
            <button className="text-white bg-kalas1 absolute px-4 py-3 text-xs mt-8">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-40 flex w-10/12 mx-auto items-center">
        <div className="h-80">
          <h1 className="font-fonty font-bold text-4xl mt-4">ZX7</h1>
          <h1 className="font-fonty font-bold text-4xl">SPEAKER</h1>

          <p className="mt-8">
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </p>
          <Link to="/Speakers2">
            <button className="text-white bg-kalas1 absolute px-4 py-3 text-xs mt-8">
              SEE PRODUCT
            </button>
          </Link>
        </div>
        <img
          src="public\resources\assets\product-zx7-speaker\desktop\image-category-page-preview.jpg"
          className="h-1/3 max-w-lg max-h-fit ml-60"
        />
      </div>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:place-items-center md:h-72 bg-white relative text-center ">
        <div className="h-56 mx-auto">
          <img
            src="/resources/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
            className="h-40 "
          />
          <h1 className="font-bold text-base text-black ">HEADPHONES</h1>
          <div className="flex gap-1 items-center ml-14 bg-white mt-2">
            <h3>SHOP</h3>
            <IoIosArrowForward className="text-kalas1" />
          </div>
        </div>
        <div className="h-56">
          <img
            src="/resources/assets/home/desktop/image-speaker-zx9.png"
            className="h-40 mask"
          />
          <h1 className="font-bold text-base text-black">SPEAKERS</h1>
          <div className="flex gap-1 items-center ml-14 bg-white mt-2">
            <h3>SHOP</h3>
            <IoIosArrowForward className="text-kalas1" />
          </div>
        </div>
        <div className="h-56 mx-auto">
          <img
            src="/resources/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
            className="h-40"
          />
          <h1 className="font-bold text-base text-black">EARPHONES</h1>
          <div className="flex gap-1 items-center ml-14 bg-white mt-2">
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

export default Speakers;
