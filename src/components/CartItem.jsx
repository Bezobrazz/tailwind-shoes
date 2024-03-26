import { CiTrash } from "react-icons/ci";
import Select from "./Select.jsx";
import { SIZES, QTY } from "../constants.js";

const CartItem = ({ item: { product, qty, size }, onClickTrash }) => {
  return (
    <div className="cursor-pointer bg-gray-50 dark:bg-transparent dark:hover:bg-night-50 hover:bg-[#DAFFA2] p-2 space-y-2">
      <div className="flex   space-x-2">
        <img className="h-24" src={product.src} alt={product.title} />
        <div className="space-y-2">
          <h3 className="font-bold dark:text-white">{product.title}</h3>
          <p className="text-sm text-gray-400">{product.description}</p>
        </div>
        <p className="font-bold dark:text-white">{product.price}$</p>
      </div>

      <div className="flex justify-between">
        <div className="flex space-x-6 pl-32">
          <div>
            <p className="font-bold dark:text-white">SIZE</p>
            <Select
              value={size}
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
            />
          </div>
          <div>
            <p className="font-bold dark:text-white">QTY</p>
            <Select
              value={qty}
              title=""
              options={QTY}
              className={"w-16 p-1 pl-2"}
            />
          </div>
        </div>
        <button onClick={() => onClickTrash(product.id)}>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
