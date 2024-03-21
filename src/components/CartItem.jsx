import { CiTrash } from "react-icons/ci";
import Select from "./Select.jsx";
import { SIZES, QTY } from "../constants.js";

const CartItem = ({ item }) => {
  return (
    <div className="cursor-pointer bg-gray-50 hover:bg-[#DAFFA2] p-2 space-y-2">
      <div className="flex   space-x-2">
        <img className="h-24" src={item.src} alt={item.title} />
        <div className="space-y-2">
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-sm text-gray-400">{item.description}</p>
        </div>
        <p className="font-bold">{item.price}$</p>
      </div>

      <div className="flex justify-between">
        <div className="flex space-x-6 pl-32">
          <div>
            <p className="font-bold">SIZE</p>
            <Select title="" options={SIZES} className={"w-16 p-1"} />
          </div>
          <div>
            <p className="font-bold">QTY</p>
            <Select title="" options={QTY} className={"w-16 p-1"} />
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
