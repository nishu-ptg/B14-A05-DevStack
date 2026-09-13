interface INavMenuMobileProps {
  items: string[];
  isOpen: boolean;
  activeItem: string;
  onItemClick: (item: string) => void;
}

const NavMenuMobile = ({
  items,
  isOpen,
  activeItem,
  onItemClick,
}: INavMenuMobileProps) => {
  return (
    isOpen && (
      <ul className="md:hidden fixed top-10 left-0 w-full bg-white/90 backdrop-blur-lg shadow-md border-t border-slate-100 flex flex-col space-y-2 px-5 py-3 z-50 text-center">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              onClick={() => onItemClick(item)}
              className={
                activeItem === item ? "text-pink-600" : "text-slate-600"
              }
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    )
  );
};

export default NavMenuMobile;
