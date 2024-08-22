import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../resources/cartSlice"
import CartItems from "./CartItems";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto flex flex-col">
        <button
          className="m-2 p-2 bg-black hover:bg-slate-800 text-white rounded-lg self-start ml-auto"
          onClick={handleClearCart}
        >
          {" "}
          Clear Cart{" "}
        </button>
        {cartItems.length === 0 && <h1 className="text-xl font-bold"> Cart is Empty ! Add Items to Cart</h1>}
        <CartItems items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
