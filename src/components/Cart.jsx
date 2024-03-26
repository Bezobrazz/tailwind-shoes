import CartItem from "./CartItem.jsx";

const Cart = ({ cartItems, onClickTrash }) => {
  return (
    <>
      <h2 className="dark:text-white text-2xl font-bold mb-10">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} onClickTrash={onClickTrash} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
