// import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Headphones2() {
  const navigate = useNavigate();

  return (
    <div className="">
      <button className="ml-32 mt-16" onClick={() => navigate(-1)}>
        Go Back
      </button>

      <div className="mt-16 flex w-10/12 mx-auto items-center">
        <img
          src="public\resources\assets\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"
          className="h-1/3 max-w-lg max-h-fit bg-red"
        />
        <div className="h-80 ml-60">
          <h1 className="font-fonty font-bold text-4xl mt-4">XX99 MARK I</h1>
          <h1 className="font-fonty font-bold text-4xl">HEADPHONES</h1>

          <p className="mt-8">
            As the gold standard for headphones, the classic XX99 MARK I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineer, and music aficionados alike in studios and on the go.
          </p>
          <p className="font-fonty font-bold text-lg mt-8">$ 1,750</p>
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
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz.
          </p>
          <p className="mt-8">
            From the handcrafted microfiber ear cushions to the robust metal
            headband with inner damping element, the components work together to
            deliver comfort and uncompromising sound. Its closed-back design
            delivers up to 27 dB of passive noise cancellation, reducing
            resonance by reflecting sound to a dedicated absorber. For
            connectivity, a specially tuned cable is included with a balanced
            gold connector..
          </p>
        </div>
        <div className="h-56 mt-8">
          <h1 className="font-fonty text-black font-bold text-2xl ">
            IN THE BOX
          </h1>
          <div className="flex mt-4 space-x-3">
            <p className="font-fonty text-base font-medium text-black">
              <span className="font-fonty text-base text-kalas1 font-bold">
                1x
              </span>
            </p>
            <p className="font-fonty text-base font-medium text-black">
              Headphone Unit
            </p>
          </div>
          <div className="flex mt-4 space-x-3">
            <p className="font-fonty text-base font-medium text-black">
              <span className="font-fonty text-base text-kalas1 font-bold">
                2x
              </span>
            </p>
            <p className="font-fonty text-base font-medium text-black">
              Replacement Earcups
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
              3.5mm 5m Audio Cable
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32 flex gap-4 rounded ml-24">
        <div className="flex flex-col gap-4">
          <img
            src="public\resources\assets\product-xx99-mark-one-headphones\desktop\image-gallery-1.jpg"
            className="h-72 rounded-lg"
          />
          <img
            src="public\resources\assets\product-xx99-mark-one-headphones\desktop\image-gallery-2.jpg"
            className="h-72 rounded"
          />
        </div>
        <>
          <img
            src="public\resources\assets\product-xx99-mark-one-headphones\desktop\image-gallery-3.jpg"
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
      </div>
    </div>
  );
}

export default Headphones2;
