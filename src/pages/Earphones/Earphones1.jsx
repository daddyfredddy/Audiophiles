// import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
// import { PRODUCTS } from "../../Products";
// import { product } from "../../Product";

function Earphones1() {
  const navigate = useNavigate();

  return (
    <div className="">
      <button className="ml-32 mt-16" onClick={() => navigate(-1)}>
        Go Back
      </button>

      <div className="mt-16 flex w-10/12 mx-auto items-center">
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
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <p className="font-fonty font-bold text-lg mt-8">$ 599</p>
          <div className="mt-8 flex gap-4">
            <div className="">
              <button className="px-5 py-3 bg-kalas3 text-black"> - </button>
              <input value={1} className="text-black bg-kalas3 px-5 py-3 w-2" />
              <button className="px-5 py-3 bg-kalas3 text-black"> + </button>
            </div>
            <div>
              <button className="text-white bg-kalas1 absolute px-9 py-4 text-xs">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-80 ml-24 flex mt-8 mx-auto gap-36">
        <div className="max-w-xl">
          <h1 className="font-fonty font-bold text-4xl mt-4">FEATURES</h1>
          <p className="mt-8">
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound.
          </p>
          <p className="mt-8">
            The YX1 Wireless Earphones features customizable controls for
            volume, music, calls, and voice assistants built into both earbuds.
            The new 7-hour battery life can be extended up to 28 hours with the
            charging case, giving you uninterrupted play time. Exquisite
            craftsmanship with a splash resistant design now available in an all
            new white and grey color scheme as well as the popular classic
            black.
          </p>
        </div>
        <div className="h-56 mt-8">
          <h1 className="font-fonty text-black font-bold text-2xl ">
            IN THE BOX
          </h1>
          <div className="flex mt-4 space-x-3">
            <p className="font-fonty text-base font-medium text-black">
              <span className="font-fonty text-base text-kalas1 font-bold">
                2x
              </span>
            </p>
            <p className="font-fonty text-base font-medium text-black">
              Earphone Units
            </p>
          </div>
          <div className="flex mt-4 space-x-3">
            <p className="font-fonty text-base font-medium text-black">
              <span className="font-fonty text-base text-kalas1 font-bold">
                6x
              </span>
            </p>
            <p className="font-fonty text-base font-medium text-black">
              Multi-size Earplugs
            </p>
          </div>
          <div className="flex mt-4 space-x-3">
            <p className="font-fonty text-base font-medium text-black">
              <span className="font-fonty text-base text-kalas1 font-bold">
                1x
              </span>
            </p>
            <p className="font-fonty text-base font-medium text-black">
              User Manual
            </p>
          </div>
          <div className="flex mt-4 space-x-3">
            <p className="font-fonty text-base font-medium text-black">
              <span className="font-fonty text-base text-kalas1 font-bold">
                1x
              </span>
            </p>
            <p className="font-fonty text-base font-medium text-black">
              USB-C Charging Cable
            </p>
          </div>
          <div className="flex mt-4 space-x-3">
            <p className="font-fonty text-base font-medium text-black">
              <span className="font-fonty text-base text-kalas1 font-bold">
                1x
              </span>
            </p>
            <p className="font-fonty text-base font-medium text-black">
              Travel Pouch
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32 flex gap-4 rounded ml-24">
        <div className="flex flex-col gap-4">
          <img
            src="public\resources\assets\product-yx1-earphones\desktop\image-gallery-1.jpg"
            className="h-72 rounded-lg"
          />
          <img
            src="public\resources\assets\product-yx1-earphones\desktop\image-gallery-2.jpg"
            className="h-72 rounded"
          />
        </div>
        <>
          <img
            src="public\resources\assets\product-yx1-earphones\desktop\image-gallery-3.jpg"
            className="rounded h-2/6"
          />
        </>
      </div>

      <div className="ml-24 mt-32  ">
        <h1 className="font-fonty font-bold text-3xl flex justify-center ">
          YOU MAY ALSO LIKE
        </h1>
        <div className="flex gap-4 mt-8 ">
          <div>
            <img
              src="public\resources\assets\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"
              className="h-80 rounded"
            />
            <p className="font-fonty text-black font-bold text-2xl mt-8 flex justify-center">
              XX99 MARK I
            </p>
            <Link to="/Headphones2" className="flex justify-center">
              <button className="text-white bg-kalas1 px-4 py-3 text-xs mt-8 absolute">
                SEE PRODUCT
              </button>
            </Link>
          </div>
          <div>
            <img
              src="public\resources\assets\product-xx59-headphones\desktop\image-category-page-preview.jpg"
              className="h-80 rounded"
            />
            <p className="font-fonty text-black font-bold text-2xl mt-8 flex justify-center">
              XX59
            </p>
            <Link to="/Headphones3" className="flex justify-center">
              <button className="text-white bg-kalas1 absolute px-4 py-3 text-xs mt-8">
                SEE PRODUCT
              </button>
            </Link>
          </div>
          <div>
            <img
              src="public\resources\assets\product-zx9-speaker\desktop\image-category-page-preview.jpg"
              className="h-80 rounded"
            />
            <p className="font-fonty text-black font-bold text-2xl mt-8 flex justify-center">
              ZX9 SPEAKER
            </p>
            <Link to="/Speakers1" className="flex justify-center">
              <button className="text-white bg-kalas1 absolute px-4 py-3 text-xs mt-8">
                SEE PRODUCT
              </button>
            </Link>
          </div>
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
        {/* <div className="">
          {PRODUCTS.map((product) => (
            <div>
              <h1>{product.productName}</h1>
              <h1>{product.price}</h1>
              {<img src={product.productImage} />}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Earphones1;
