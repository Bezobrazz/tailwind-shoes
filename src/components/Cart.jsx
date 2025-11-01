import CartItem from "./CartItem.jsx";
import CartCheckout from "./CartCheckout.jsx";
import { useState } from "react";

const Cart = ({ cartItems, onClickTrash, onChangeItem }) => {
  const [view, setView] = useState("cart");

  if (cartItems.length === 0) {
    return (
      <>
        <h2 className="dark:text-white text-2xl font-bold mb-10">Cart</h2>
        <p className="rounded-xl border border-dashed border-gray-300 p-6 text-sm font-medium text-gray-500 dark:border-night-50 dark:text-gray-300">
          Shopping cart is empty, add a product.
        </p>
      </>
    );
  }

  if (view === "checkout") {
    return <CartCheckout items={cartItems} onBack={() => setView("cart")} />;
  }

  return (
    <>
      <h2 className="dark:text-white text-2xl font-bold mb-10">Cart</h2>
      <div className="flex flex-col space-y-6">
        <ul className="space-y-5">
          {cartItems.map((cartItem) => (
            <li key={cartItem.product.id}>
              <CartItem
                item={cartItem}
                onClickTrash={onClickTrash}
                onChangeItem={onChangeItem}
              />
            </li>
          ))}
        </ul>
        <button
          onClick={() => setView("checkout")}
          className=" bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/80 dark:bg-white dark:text-night dark:hover:bg-white/80"
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
