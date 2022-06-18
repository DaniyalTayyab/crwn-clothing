import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0
          ? cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          : "Cart is empty"}
      </div>
      <Button>
        <Link to="checkout">Go To CHECKOUT</Link>
      </Button>
    </div>
  );
};

export default CartDropdown;
