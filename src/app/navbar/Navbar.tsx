"use client";
import { useState } from "react";
import Image from "next/image";
import { Search, ShoppingBag, User, ChevronDown } from "react-feather";
import Dropdown from "../ui/DropDown";
import Options from "../types/Options";
import ActiveIndex from "../types/Action";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const options: Options[] = [
    { text: "Desktop and Laptops", href: "#" },
    { text: "Consoles and Accessories", href: "#" },
    { text: "Audio and Headphones", href: "#" },
    { text: "Tablets and E-Readers", href: "#" },
    { text: "Smartphones and Accessories", href: "#" },
  ];

  const handleMouseEnter = (e: ActiveIndex) => {
    setActiveIndex(e.index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <header className="flex items-center justify-between py-6">
      <Image
        className="grow-0"
        src="/img/hero.svg"
        width={120}
        height={60}
        alt="e-commerce logo"
      />
      <ul className="flex grow-0 gap-20">
        <li
          onMouseEnter={() => handleMouseEnter({ index: 0 })}
          className={`nav-item relative ${activeIndex === 0 ? "active" : ""}`}
        >
          <Dropdown options={options} setActiveIndex={setActiveIndex}>
            <div className="flex">
              <span>Shop</span>
              <ChevronDown className="w-5" />
            </div>
          </Dropdown>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter({ index: 1 })}
          onMouseLeave={() => handleMouseLeave()}
          className={`nav-item relative ${activeIndex === 1 ? "active" : ""}`}
        >
          Deals
        </li>
        <li
          onMouseEnter={() => handleMouseEnter({ index: 2 })}
          onMouseLeave={() => handleMouseLeave()}
          className={`nav-item relative ${activeIndex === 2 ? "active" : ""}`}
        >
          What&apos;s New
        </li>
        <li
          onMouseEnter={() => handleMouseEnter({ index: 3 })}
          onMouseLeave={() => handleMouseLeave()}
          className={`nav-item relative ${activeIndex === 3 ? "active" : ""}`}
        >
          About us
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <form role="search" className="relative flex items-center">
          <input
            className="max-w-[200px] rounded-[10px] border-[1px] bg-gray-100 py-[4px] pl-10"
            type="search"
            name="search-input"
            placeholder="Search..."
          />
          <button className="absolute left-2" type="submit">
            <Search className="text-gray-400" />
          </button>
        </form>
        <ShoppingBag className="cursor-pointer text-fontLight" />
        <User className="cursor-pointer text-fontLight" />
      </div>
    </header>
  );
}

export default Navbar;
