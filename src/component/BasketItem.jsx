import React from "react";

export const BasketItem = ({ product, item }) => {
  return (
    <div>
      {product.title}*{item.amount}
    </div>
  );
};

export default BasketItem;
