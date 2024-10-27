// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContext";
// import { PRODUCTS } from "../../products";
// import { Product } from "../../Product";

function Cart() {
  // const {} = useContext(ShopContext);
  return (
    <div className="w-96 h-1/3 fixed z-50 bg-kalas3 ">
      <>
        <p>CART(0)</p>
        <p>Remove all</p>
      </>
      <div>
        {/* {PRODUCTS.map(
          (product) => (
            <Product data={product} />
          )
          // if(cartItems)
        )} */}
      </div>
      <>
        <p>TOTAL</p>
        <p>$</p>
      </>
      <Link to="/checkout">
        <button className="text-white bg-kalas1 absolute px-9 py-4 text-xs">
          CHECKOUT
        </button>
      </Link>
    </div>
  );
}

export default Cart;
