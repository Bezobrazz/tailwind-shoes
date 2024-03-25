import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { twMerge } from "tw-merge";
const Select = ({ title, options, className, defaultValue }) => {
  return (
    <div className="relative dark:text-black">
      <select
        defaultValue={defaultValue || ""}
        className={twMerge(
          `w-24 appearance-none border border-gray-300 bg-white p-4 cursor-pointer  ${className}`
        )}
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
