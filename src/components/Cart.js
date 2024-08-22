import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../resources/cartSlice";
import CartItems from "./CartItems";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Your Cart</h1>
      <div className="flex flex-col">
        <button
          className="mb-6 py-2 px-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg self-end shadow-md transition-all"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <h1 className="text-2xl font-semibold text-gray-600">
            Cart is Empty! Add Items to Cart
          </h1>
        ) : (
          <CartItems items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
