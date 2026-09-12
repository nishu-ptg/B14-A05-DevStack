import { useState } from "react";
import logoText from "../../assets/logo-text.png";
import NavMenuDesktop from "./NavMenuDesktop";

const menuItems = ["Home", "Technologies", "Projects", "About", "Contact"];

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <nav className="border-b border-slate-100 font-bold text-sm">
      <div className="container mx-auto flex items-center justify-between h-20">
        <img src={logoText} alt="Logo" />

        <NavMenuDesktop
          items={menuItems}
          activeItem={activeItem}
          onItemClick={setActiveItem}
        />

        <div className="flex space-x-0">
          <button className="bg-transparent text-slate-800 rounded-full px-5 py-3 cursor-pointer">
            Sign In
          </button>
          <button className="bg-pink-600 text-white rounded-full px-5 py-3 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
