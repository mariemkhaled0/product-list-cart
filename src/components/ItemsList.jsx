import React, { useState } from "react";

const ItemsList = ({
  items,

  handleIncrement,
  handleDecrement,
  cart,
  handleAddToCart,
  handelCartItems,
}) => {
  return (
    <div>
      <h1>Desert</h1>
      <div className="items-container">
        {items.map((item, index) => {
          const count = cart[item.id] || 0;
          return (
            <div className="single-item-container" key={index}>
              <div className="img-container">
                {" "}
                <img
                  className="item-img"
                  src={item.image.desktop}
                  alt={item.name}
                />
                <div className={count > 0 ? "cartIcon count" : "cartIcon "}>
                  {count > 0 ? (
                    <div
                      style={{ display: "flex", gap: "20px", color: "white" }}
                    >
                      <img
                        onClick={() => {
                          handleIncrement(item.id);
                        }}
                        alt="increment"
                        src=".\assets\images\icon-increment-quantity.svg"
                      />
                      <h4>{count}</h4>
                      <img
                        onClick={() => {
                          handleDecrement(item.id, item);
                        }}
                        alt="decrement"
                        src=".\assets\images\icon-decrement-quantity.svg"
                      />
                    </div>
                  ) : (
                    <div
                      style={{ display: "flex", gap: "10px" }}
                      onClick={() => {
                        handleAddToCart(item.id);
                      }}
                    >
                      <img
                        src=".\assets\images\icon-add-to-cart.svg"
                        alt="icon"
                      />
                      <p>Add to cart</p>
                    </div>
                  )}
                </div>
              </div>

              <p className="category">{item.category}</p>
              <p>{item.name}</p>
              <p className="price">{item.price} $</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemsList;
