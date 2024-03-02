import nike1 from "../assets/n1-min.png";
import { QTY, SIZES } from "../constants";
import Select from "./Select";
const ShoeDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className=" flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img className="animate-float" src={nike1} alt="" />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-black md:text-9xl">Nike Air max 270</h1>
        <h2 className="font-medium md:text-xl">
          The Nike Air max 270 is a lifestyle shoe that`s sure to turn heads
          with it`s vibrant color gradient
        </h2>
        <div className="flex space-x-6">
          <p className="text-3xl font-extrabold md:text-6xl">100 $</p>
          <Select title={"QTY"} options={QTY} />
          <Select title={"SIZE"} options={SIZES} />
        </div>
        <div className="space-x-10">
          <button className="transition active:scale-75 h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
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
