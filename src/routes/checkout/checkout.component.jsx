import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, incrementCount } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((item) => {
        const { name, quantity, price, imageUrl } = item;
        return (
          <div>
            <img src={imageUrl} alt={`${imageUrl}`} />
            <div>
              <span>{name},</span>
              <span>
                <span>-</span> quantity: {quantity}
                <span onClick={incrementCount} style={{ cursor: "pointer" }}>
                  +
                </span>
                ,
              </span>
              <span>${price * quantity}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
