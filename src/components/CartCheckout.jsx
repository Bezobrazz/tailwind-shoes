const CartCheckout = ({ items, onBack }) => {
  const subtotal = items.reduce(
    (sum, { product, qty }) => sum + product.price * qty,
    0
  );

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="text-sm font-semibold text-gray-500 underline underline-offset-4 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
          type="button"
        >
          Back to cart
        </button>
        <h2 className="text-2xl font-bold text-night dark:text-white text-center">
          Checkout
        </h2>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
          Order summary
        </h3>
        <ul className="space-y-4">
          {items.map(({ product, qty, size }) => (
            <li
              key={`${product.id}-${size}`}
              className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/70 p-4 shadow-sm dark:border-night-50 dark:bg-night-50"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-50 p-2 dark:bg-night">
                <img
                  src={product.src}
                  alt={product.title}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-semibold text-night dark:text-white">
                  {product.title}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                  Size EU {size} · Qty {qty}
                </p>
              </div>
              <p className="text-sm font-semibold text-night dark:text-white">
                {(product.price * qty).toFixed(0)} $
              </p>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3 text-sm font-semibold text-night dark:bg-night dark:text-white">
          <span>Subtotal</span>
          <span>{subtotal.toFixed(0)} $</span>
        </div>
      </div>

      <form className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
          Shipping details
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-1">
            <label className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              First name
            </label>
            <input
              type="text"
              placeholder="John"
              className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-night focus:border-night focus:outline-none dark:border-night-50 dark:bg-night dark:text-gray-100"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              Last name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-night focus:border-night focus:outline-none dark:border-night-50 dark:bg-night dark:text-gray-100"
            />
          </div>
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-night focus:border-night focus:outline-none dark:border-night-50 dark:bg-night dark:text-gray-100"
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Shipping address
          </label>
          <textarea
            rows={3}
            placeholder="Street, City, Country"
            className="resize-none rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-night focus:border-night focus:outline-none dark:border-night-50 dark:bg-night dark:text-gray-100"
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Payment method
          </label>
          <select className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-night focus:border-night focus:outline-none dark:border-night-50 dark:bg-night dark:text-gray-100">
            <option>Credit / Debit card</option>
            <option>Apple Pay</option>
            <option>Google Pay</option>
            <option>PayPal</option>
          </select>
        </div>
        <button
          type="button"
          className="w-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/80 dark:bg-white dark:text-night dark:hover:bg-white/80"
        >
          Place order
        </button>
      </form>
    </div>
  );
};

export default CartCheckout;
