import { useState } from "react";
import useCart from "../hooks/useCart";
import CartLineItem from "./CartLineItem";

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTION, totalItems, totalPrice, cart } = useCart(); // call custom state from custom hook
  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTION.SUBMIT });
    setConfirm(true);
  };

  const pageContent = confirm ? (
    <h2>Thank you for your order.</h2>
  ) : (
    <>
      <h2 className="offscreen">Cart</h2>
      <ul className="cart">
        {cart.map((item) => {
          return (
            <CartLineItem
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTION}
            />
          );
        })}
      </ul>
      <div className="cart__totals">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <button
          onClick={onSubmitOrder}
          className="cart__submit"
          disabled={!totalItems}
        >
          Place Order
        </button>
      </div>
    </>
  );

  const content = <main className="main main--cart">{pageContent}</main>;

  return content;
};

export default Cart;
