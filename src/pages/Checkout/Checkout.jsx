// import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  return (
    <div>
      <button className="ml-32 mt-16" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <h1>CHECKOUT</h1>
      <h3>BILLING DETAILS</h3>
      <form>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name entered"
        ></input>

        <label>Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="customer@abc.com"
        ></input>

        <label>Phone Number</label>
        <input
          type="tel"
          id="number"
          name="number"
          placeholder="+254000000"
        ></input>
      </form>
      <h3>SHIPPING INFO</h3>
      <div>
        <label>Address</label>
        <input
          type="tel"
          id="number"
          name="number"
          placeholder="1200 Gikambura"
        ></input>

        <label>Zip Code</label>
        <input
          type="number"
          id="number"
          name="number"
          placeholder="+254000000"
        ></input>

        <label>City</label>
        <input type="text" id="City" name="city" placeholder="Nairobi"></input>

        <label>Phone Number</label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="Kenya"
        ></input>
      </div>

      <h3>PAYMENT DETAILS</h3>

      <form>
        <label>Payment Method</label>
        <input type="radio" id="emoney" name="emoney"></input>

        <input
          type="radio"
          id="Cash On Delivery"
          name="Cash On Delivery"
        ></input>

        <label>e-Money Number</label>
        <input
          type="number"
          id="money"
          name="money"
          placeholder="123456"
        ></input>

        <label>e-Money Pin</label>
        <input type="number" id="pin" name="pin" placeholder="1234"></input>
      </form>
    </div>
  );
}

export default Checkout;
