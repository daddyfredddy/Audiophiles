// import React from "react";

export const Product = (props) => {
  // const { id, productName, price, productImage } = props.data;
  return (
    <div>
      <img src={productImage} />
      <p>{productName}</p>
      <p>${price}</p>
    </div>
  );
};
