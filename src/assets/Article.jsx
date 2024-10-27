// import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Article() {
  return (
    <div>
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

      <div className="bg-kalas1 h-1/2 flex gap-10 mx-20">
        <img
          src="/resources/assets/home/desktop/image-speaker-zx9.png"
          className="mt-20"
        />
        <div className="h-72 mt-28 relative">
          <h1 className="text-white font-bold font-fonty text-6xl">ZX9</h1>
          <h1 className="text-white font-bold font-fonty text-6xl mt-1">
            SPEAKER
          </h1>

          <p className="text-white mt-20">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to="/Speakers1">
            <button className="text-white bg-black py-5 px-6 mt-56">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>
      <div className="relative mt-9 flex ml-20">
        <div className="absolute ml-20 mt-20">
          <h1 className="font-bold text-xl">ZX7 SPEAKER</h1>
          <Link to="/Speakers2">
            <button className="text-black py-5 px-6 border border-black mt-10">
              SEE PRODUCT
            </button>
          </Link>
        </div>
        <img src="/resources/assets/home/desktop/image-speaker-zx7.jpg" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mx-20 mt-10">
        <img
          src="public\resources\assets\product-yx1-earphones\desktop\image-gallery-2.jpg"
          className="h-80"
        />
        <div className="bg-kalas3 h-80">
          <div className="ml-20 mt-28">
            <h1 className="font-bolt text-xl mt-10">YX1 EARPHONES</h1>
            <Link to="/Earphones1">
              <button className="text-black py-5 px-6 border border-black mt-8">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-20 mt-10">
        <div>
          <h1 className="font-bold font-fonty text-4xl">
            BRINGING YOU THE <span className="text-kalas1">BEST</span> AUDIO
            GEAR
          </h1>
          <p className="font-medium font-fonty text-base text-kalas8 mt-10">
            Located at the heart of New York, Audiophile is the premier store
            for high end headphones, earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration rooms available
            for you to browse and experience a wide range of our products. Stop
            by our store to meet some of the fantastic people who make
            Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img
          src="public\resources\assets\product-xx99-mark-two-headphones\desktop\image-gallery-1.jpg"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Article;
