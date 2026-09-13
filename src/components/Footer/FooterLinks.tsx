import type { ILinkItem } from "../../types/linkItem";

interface IFooterLinksProps {
  title: string;
  links: ILinkItem[];
}

const FooterLinks = ({ title, links }: IFooterLinksProps) => {
  return (
    <div className="hidden md:block col-span-1">
      <h3 className="uppercase text-slate-900 font-bold text-xs mb-4">
        {title}
      </h3>
      <ul className="space-y-3 mb-5 text-xs text-slate-500">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href ?? "#"}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
