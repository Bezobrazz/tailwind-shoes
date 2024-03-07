const CartItem = ({ item }) => {
  return (
    <div className="flex hover:bg-[#DAFFA2] p-2 cursor-pointer bg-gray-50 space-x-2">
      <img className="h-24" src={item.src} alt={item.title} />
      <div className="space-y-2">
        <h3 className="font-bold">{item.title}</h3>
        <p className="text-sm text-gray-400">{item.description}</p>
      </div>
      <p className="font-bold">{item.price}$</p>
    </div>
  );
};

export default CartItem;
