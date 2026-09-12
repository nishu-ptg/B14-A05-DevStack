interface INavMenuDesktopProps {
  items: string[];
  activeItem: string;
  onItemClick: (item: string) => void;
}

const NavMenuDesktop = ({
  items,
  activeItem,
  onItemClick,
}: INavMenuDesktopProps) => {
  return (
    <ul className="hidden md:flex space-x-7.5">
      {items.map((item) => (
        <li key={item}>
          <a
            href="#"
            onClick={() => onItemClick(item)}
            className={activeItem === item ? "text-pink-600" : "text-slate-600"}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavMenuDesktop;
