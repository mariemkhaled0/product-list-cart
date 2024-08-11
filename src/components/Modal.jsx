import React from "react";

const Modal = ({ handleShowModal, cart, items, totalPrice }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <img
          src=".\assets\images\icon-order-confirmed.svg"
          alt="confirm-icon"
        />
        <h2>Order confirmed</h2>
        <p>we hope you enjoy your food!</p>
        <div className="confirmed-items-container">
          {Object.keys(cart).map((itemId) => {
            const item = items.find((item) => item.id === parseInt(itemId));
            return (
              <div key={itemId} className="single-confirmed-item">
                <div className="confirmed-items-img-info">
                  <img src={item.image.thumbnail} alt="thumbnail" />
                  <div className="confirmed-items-info">
                    <h6>{item.category}</h6>
                    <span style={{ color: "red" }}>{cart[itemId]}x</span>
                    <span> @${item.price}</span>
                  </div>
                </div>
                <div>
                  <h5>${item.price * cart[itemId]}</h5>
                </div>
              </div>
            );
          })}
          <div className="total-price-container modal-price">
            <p>total Order</p>
            <h3>${totalPrice}</h3>
          </div>
        </div>
        <div className="modal-btn">
          {" "}
          <button
            style={{ width: "100%" }}
            onClick={handleShowModal}
            className="confirm-btn "
          >
            Start new Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
