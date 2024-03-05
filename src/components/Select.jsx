import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Select = ({ title, options }) => {
  return (
    <div className="relative">
      <select
        defaultValue={""}
        className="w-24 appearance-none border border-gray-300 bg-white p-4 cursor-pointer"
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-3">
        <MdOutlineKeyboardArrowDown />
      </div>
    </div>
  );
};

export default Select;
