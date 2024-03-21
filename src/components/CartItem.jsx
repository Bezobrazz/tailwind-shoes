import { CiTrash } from "react-icons/ci";
import Select from "./Select.jsx";
import { SIZES, QTY } from "../constants.js";

const CartItem = ({ item: { product, qty, size } }) => {
  return (
    <div className="cursor-pointer bg-gray-50 hover:bg-[#DAFFA2] p-2 space-y-2">
      <div className="flex   space-x-2">
        <img className="h-24" src={product.src} alt={product.title} />
        <div className="space-y-2">
          <h3 className="font-bold">{product.title}</h3>
          <p className="text-sm text-gray-400">{product.description}</p>
        </div>
        <p className="font-bold">{product.price}$</p>
      </div>

      <div className="flex justify-between">
        <div className="flex space-x-6 pl-32">
          <div>
            <p className="font-bold">SIZE</p>
            <Select
              defaultValue={size}
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
            />
          </div>
          <div>
            <p className="font-bold">QTY</p>
            <Select
              defaultValue={qty}
              title=""
              options={QTY}
              className={"w-16 p-1 pl-2"}
            />
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
