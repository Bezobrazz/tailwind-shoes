import CartItem from "./CartItem.jsx";

const Cart = ({ cartItems }) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-10">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
