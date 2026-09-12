import { useState } from "react";
import logoText from "../../assets/logo-text.png";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";
import hamburgerIcon from "../../assets/hamburger.png";

const menuItems = ["Home", "Technologies", "Projects", "About", "Contact"];

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 font-bold md:font-medium text-xs md:text-sm">
        <div className="container mx-auto flex items-center justify-between px-5 h-10 md:h-20">
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <img src={hamburgerIcon} alt="Menu" />
          </button>

          <img src={logoText} alt="Logo" className="h-6 md:h-auto" />

          <NavMenuDesktop
            items={menuItems}
            activeItem={activeItem}
            onItemClick={setActiveItem}
          />

          <div className="flex space-x-0">
            <button className="bg-transparent text-slate-800 rounded-full px-2.5 md:px-5 py-1 md:py-3 cursor-pointer">
              Sign In
            </button>
            <button className="bg-pink-600 text-white rounded-full px-2.5 md:px-5 py-1 md:py-3 cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <NavMenuMobile items={menuItems} isOpen={isMobileOpen} />
    </>
  );
};

export default NavBar;
