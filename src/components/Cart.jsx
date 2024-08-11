import React from "react";

const Cart = ({ cart, items, handleDelete, handleShowModal, totalPrice }) => {
  const totalItems = Object.values(cart).reduce((acc, count) => acc + count, 0);
  // const totalPrice = Object.keys(cart).reduce((acc, itemId) => {
  //   const item = items.find((item) => item.id === parseInt(itemId));
  //   return acc + item.price * cart[itemId];
  // }, 0);

  return (
    <div className="cart-container">
      {totalItems > 0 ? (
        <>
          <h3>Your Cart ({totalItems})</h3>
          {Object.keys(cart).map((itemId) => {
            const item = items.find((item) => item.id === parseInt(itemId));
            return (
              <div className="cartShowItems" key={itemId}>
                <h4>{item.name}</h4>
                <div className="price-container">
                  <div style={{ marginBottom: "10px" }}>
                    <span style={{ color: "red" }}>{cart[itemId]} x</span>
                    <span> @ ${item.price}</span>
                    <span> $ {item.price * cart[itemId]} </span>
                  </div>
                  <div>
                    <button
                      className="delete-btn"
                      onClick={() => {
                        handleDelete(itemId);
                      }}
                    >
                      <img
                        alt="delete"
                        src=".\assets\images\icon-remove-item.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="total-price-container">
            <p>Order total</p>
            <span className="total-price"> ${totalPrice} </span>
          </div>

          <div className="carbon-container">
            <img
              alt="carbon-icon"
              src=".\assets\images\icon-carbon-neutral.svg"
            />
            <p>
              this is a <span>carbon-neutral</span> delivery
            </p>
          </div>
          <button onClick={handleShowModal} className="confirm-btn">
            Confirm Order
          </button>
        </>
      ) : (
        <>
          <h3>Your Cart ({totalItems})</h3>
          <img alt="img" src=".\assets\images\illustration-empty-cart.svg" />
          <p>your added items will appear here</p>
        </>
      )}
    </div>
  );
};

export default Cart;
