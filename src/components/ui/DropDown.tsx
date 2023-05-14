"use client";

import { Fragment, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Options from "@/types/Options";

interface Props {
  options: Options[];
  children?: React.ReactNode;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

function Dropdown({ options, children, setActiveIndex }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  const handleOpen = () => {
    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleClose = () => {
    const timeoutId = setTimeout(() => {
      setIsOpen(false);
      setActiveIndex(null);
      closeTimeoutRef.current = null;
    }, 100);
    closeTimeoutRef.current = timeoutId as unknown as number;
  };

  return (
    <Menu as="div" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <Menu.Button as={Fragment}>{children}</Menu.Button>
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          onMouseLeave={() => handleClose()}
          className="absolute mt-2 rounded-[14px] border-transparent bg-bgLight px-2 py-2 text-fontLight shadow-md"
        >
          {options.map((option) => (
            <Menu.Item key={option.text} as={Fragment}>
              {({ active }) => (
                <div className="min-h-[30px]">
                  <a
                    href={option.href}
                    className={`block min-w-[250px] rounded-[10px] px-3 py-2 ${
                      active
                        ? "text-white transition-colors duration-150 ease-in-out hover:bg-[#00CDE9]"
                        : ""
                    }`}
                  >
                    {option.text}
                  </a>
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
