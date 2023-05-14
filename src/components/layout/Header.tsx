"use client";

import { useEffect, useState } from "react";

import Navbar from "./Navbar";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 bg-white ${
        isScrolled ? "shadow-md transition-shadow duration-200 ease-in-out" : ""
      }`}
    >
      <Navbar />
    </header>
  );
}

export default Header;
