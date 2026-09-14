import { GoDotFill } from "react-icons/go";
import logoText from "../../assets/logo-text.png";
import type { ILinkItem } from "../../types/linkItem";
import FooterLinks from "./FooterLinks";

const socialLinks: ILinkItem[] = [
  { label: "GitHub" },
  { label: "Twitter" },
  { label: "LinkedIn" },
];

const productLinks: ILinkItem[] = [
  { label: "Home" },
  { label: "Technologies" },
  { label: "Projects" },
];

const companyLinks: ILinkItem[] = [
  { label: "About Us" },
  { label: "Careers" },
  { label: "Contact" },
];

const legalLinks: ILinkItem[] = [
  { label: "Privacy Policy" },
  { label: "Terms of Service" },
];

const Footer = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-7 md:py-14">
        <div className="col-span-1 md:col-span-2">
          <div className="flex flex-col justify-between h-full items-center md:items-start">
            <div>
              <img src={logoText} alt="Logo" className="h-7 w-auto" />
            </div>
            <p className="text-xs text-slate-500 2xl:pr-40 mt-5 md:mt-0 mb-8 md:mb-0">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <ul className="flex items-center text-xs font-semibold text-slate-800">
              {socialLinks.map((link, i) => (
                <li key={link.label} className="flex items-center">
                  {i > 0 && (
                    <span className="mx-4 text-slate-500">
                      <GoDotFill size={10} className="md:hidden" />
                    </span>
                  )}

                  <a href={link.href || "#"}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FooterLinks title="Product" links={productLinks} />
        <FooterLinks title="Company" links={companyLinks} />
        <FooterLinks title="Legal" links={legalLinks} />
      </div>

      <footer className="flex border-t border-slate-100 py-5 md:py-8 text-xs text-slate-400 flex-row items-center justify-between">
        <p>&copy; 2026 Dev Stack. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
