// import { useContext } from "react";
// import { PRODUCTS } from "../../Products";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContext";

function Headphones() {
  // const { addToCart } = useContext(ShopContext);

  return (
    <div>
      <div className="h-60 w-full bg-black flex justify-center items-center">
        <h1 className="font-fonty font-bold text-5xl text-white ">
          HEADPHONES
        </h1>
      </div>
      <div className="mt-40 flex w-10/12 mx-auto items-center">
        <img
          src="public\resources\assets\product-xx99-mark-two-headphones\desktop\image-category-page-preview.jpg"
          className="h-1/3 max-w-lg max-h-fit bg-red"
        />
        <div className="h-80 ml-60">
          <h3 className="text-kalas1 font-fonty text-xs tracking-widest font-normal">
            NEW PRODUCT
          </h3>
          <h1 className="font-fonty font-bold text-4xl mt-4">XX99 MARK II</h1>
          <h1 className="font-fonty font-bold text-4xl">HEADPHONES</h1>

          <p className="mt-8">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It defines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Link to="/Headphones1">
            <button className="text-white bg-kalas1 absolute px-4 py-3 text-xs mt-8">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-40 flex w-10/12 mx-auto items-center">
        <div className="h-80">
          <h1 className="font-fonty font-bold text-4xl mt-4">XX99 MARK I</h1>
          <h1 className="font-fonty font-bold text-4xl">HEADPHONES</h1>

          <p className="mt-8">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and aficionados alike in studios and on the go.
          </p>
          <Link to="/Headphones2">
            <button className="text-white bg-kalas1 absolute px-4 py-3 text-xs mt-8">
              SEE PRODUCT
            </button>
          </Link>
        </div>
        <img
          src="public\resources\assets\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"
          className="h-1/3 max-w-lg max-h-fit ml-60"
        />
      </div>

      <div className="mt-40 flex w-10/12 mx-auto items-center">
        <img
          src="public\resources\assets\product-xx59-headphones\desktop\image-category-page-preview.jpg"
          className="h-1/3 max-w-lg max-h-fit"
        />
        <div className="h-80 ml-60">
          <h3 className="text-kalas1 font-fonty text-xs tracking-widest font-normal">
            NEW PRODUCT
          </h3>
          <h1 className="font-fonty font-bold text-4xl mt-4">XX59</h1>
          <h1 className="font-fonty font-bold text-4xl">HEADPHONES</h1>

          <p className="mt-8">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <Link to="/Headphones3">
            <button className="text-white bg-kalas1 absolute px-4 py-3 text-xs mt-8">
              SEE PRODUCT
            </button>
          </Link>
        </div>
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

export default Headphones;
