import { useState } from "react";
import chevronDown from "../assets/chevron-down.png";
import Button from "../components/Button";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full lg:w-[80%] mx-auto border-black border-2 border-b-4 px-4 xl:px-[47px] py-4 bg-white rounded-[8px] relative">
      {/* Logo */}
      <a href="#" className="text-[24px] font-bold">
        Dogcoin
      </a>

      {/* Hamburger Menu Button (Mobile Only) */}
      <button
        className="block lg:hidden text-black focus:outline-none cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <GiHamburgerMenu className="text-3xl" />
      </button>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-[40px] items-center">
        {["About", "Swap", "How to Buy", "Stake"].map((item, index) => (
          <li key={index}>
            <a href="#" className="text-[21px]">
              {item}
            </a>
          </li>
        ))}
        <li className="flex items-center gap-[7.5px]">
          <a href="#" className="text-[21px]">
            More
          </a>
          <img
            src={chevronDown}
            alt="Dropdown"
            width={18}
            height={8}
            className="mt-[3px]"
          />
        </li>
      </ul>

      {/* Buy Button (Always Visible) */}
      <div className="hidden lg:block">
        <Button content="Buy now" />
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-black lg:hidden">
          <ul className="flex flex-col space-y-4 py-4 items-center">
            {["About", "Swap", "How to Buy", "Stake", "More"].map(
              (item, index) => (
                <li key={index}>
                  <a href="#" className="text-[21px]">
                    {item}
                  </a>
                </li>
              )
            )}
            {/* Mobile Buy Button */}
            <Button content="Buy now" />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
