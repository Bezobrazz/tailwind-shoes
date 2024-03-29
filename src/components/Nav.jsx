import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { nanoid } from "nanoid";
import { useState } from "react";

const Nav = ({ onClickShoppingButton }) => {
  const [isMobileMenu, setisMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setisMobileMenu(!isMobileMenu);
  };

  const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
  return (
    <nav className="z-index-10 relative flex flex-wrap justify-between items-center">
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>
      <button
        onClick={toggleMobileMenu}
        className="dark:text-gray-400 hover:dark:bg-gray-700 lg:hidden p-2 focus:ring-2 focus: ring-gray-200 rounded-lg hover:bg-gray-100"
      >
        <RxHamburgerMenu size={25} />
      </button>
      <div
        className={`${isMobileMenu ? "" : "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className="bg-gray-50 text-lg border border-gray-100 rounded-lg p-4 flex flex-col lg:flex-row lg:bg-transparent lg:border-none lg:space-x-8 lg:dark:text-white">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`px-3 py-2 cursor-pointer rounded lg:hover:bg-transparent lg:hover:text-blue-500 ${
                  i === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                    : "hover:bg-gray-100"
                } ${(i === 3 || i === 4) && "lg:text-white"}`}
                key={nanoid()}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="transition active:scale-75 fixed left-4 bottom-4 lg:static lg:mr-8 cursor-pointer">
        <button
          onClick={onClickShoppingButton}
          className="flex-center h-12 w-12 rounded-full bg-white shadow-md "
        >
          <TbShoppingBag />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
