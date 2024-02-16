import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      <button className="p-2 focus:ring-2 focus: ring-gray-200 rounded-lg hover:bg-gray-100">
        <RxHamburgerMenu size={25} />
      </button>
    </nav>
  );
};

export default Nav;
