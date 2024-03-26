import { QTY, SIZES } from "../constants";
import Select from "./Select";
import { useState } from "react";

const ShoeDetail = ({ shoe, onClickAdd }) => {
  const [form, setForm] = useState({ qty: null, size: null });
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4 dark:text-white">
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className=" flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img className="animate-float" src={shoe.src} alt="" />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-black md:text-9xl">{shoe.title}</h1>
        <h2 className="font-medium md:text-xl">{shoe.description}</h2>
        <div className="flex space-x-6">
          <p className="text-3xl font-extrabold md:text-6xl">{shoe.price} $</p>
          <Select
            value={form.qty}
            onChange={(qty) => setForm({ ...form, qty })}
            title={"QTY"}
            options={QTY}
          />
          <Select
            value={form.size}
            onChange={(size) => setForm({ ...form, size })}
            title={"SIZE"}
            options={SIZES}
          />
        </div>
        <div className="space-x-10">
          <button
            onClick={() => {
              onClickAdd(shoe, form.qty, form.size);
            }}
            className="transition active:scale-75 h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white dark:text-black"
          >
            Add to cart
          </button>
          <a
            className="text-lg font-bold underline underline-offset-4"
            href="#"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
