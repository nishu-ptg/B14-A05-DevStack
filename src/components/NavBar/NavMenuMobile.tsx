import React from "react";

interface INavMenuMobileProps {
  items: string[];
  isOpen: boolean;
}

const NavMenuMobile = ({ items, isOpen }: INavMenuMobileProps) => {
  return (
    isOpen && (
      <ul className="absolute top-10 left-0 w-full bg-white/90 shadow-md border-t border-slate-100 flex flex-col space-y-2 px-5 py-3 z-50 text-center">
        {items.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    )
  );
};

export default NavMenuMobile;
