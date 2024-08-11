import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ItemsList from "./components/ItemsList";
import data from "./data.json";
import Modal from "./components/Modal";

function App() {
  const [items, setItems] = useState(data);
  const [cart, setCart] = useState({});
  const [showModal, setModal] = useState(false);

  const handleAddToCart = (id, item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const handleIncrement = (id, item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1, // Toggle the cart status for the item
    }));
  };
  const handleDecrement = (id, item) => {
    setCart((prevCart) => {
      const newCount = prevCart[id] - 1;
      if (newCount > 0) {
        return { ...prevCart, [id]: newCount };
      } else {
        const { [id]: _, ...rest } = prevCart;
        return rest;
      }
    });
  };
  const handleDelete = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[id];
      return updatedCart;
    });
  };
  const handleShowModal = () => {
    if (showModal === false) {
      setModal(!showModal);
    } else {
      setModal(!showModal);
      setCart({});
    }
  };

  const totalPrice = Object.keys(cart).reduce((acc, itemId) => {
    const item = items.find((item) => item.id === parseInt(itemId));
    return acc + item.price * cart[itemId];
  }, 0);

  return (
    <div className="container">
      <ItemsList
        cart={cart}
        handleAddToCart={handleAddToCart}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        items={items}
      />
      <Cart
        totalPrice={totalPrice}
        handleShowModal={handleShowModal}
        handleDelete={handleDelete}
        items={items}
        cart={cart}
      />
      {showModal ? (
        <Modal
          totalPrice={totalPrice}
          cart={cart}
          items={items}
          handleShowModal={handleShowModal}
        />
      ) : null}
    </div>
  );
}

export default App;
