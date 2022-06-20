import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0
          ? cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          : "Cart is empty"}
      </div>
      <Button onClick={goToCheckoutHandler}>Go To CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
