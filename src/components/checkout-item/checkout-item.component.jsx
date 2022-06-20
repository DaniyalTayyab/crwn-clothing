import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import del from "../../assets/delete.png";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };

  const incrementHander = () => {
    addItemToCart(cartItem);
  };

  const decrementHandler = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementHander}>
          &#10095;
        </div>
      </span>
      <span className="price">{price} Rs/-</span>
      <div className="remove-button">
        <img src={del} alt="del" onClick={clearItemHandler} />
      </div>
    </div>
  );
};

export default CheckoutItem;
