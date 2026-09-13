import logoText from "../../assets/logo-text.png";

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

            <ul className="flex items-center gap-4 text-xs text-semibold text-slate-800">
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden md:block col-span-1">
          <h3 className="uppercase text-slate-900 font-bold text-xs mb-4">
            Product
          </h3>
          <ul className="space-y-3 mb-5 text-xs text-slate-500">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:block col-span-1">
          <h3 className="uppercase text-slate-900 font-bold text-xs mb-4">
            Company
          </h3>
          <ul className="space-y-3 mb-5 text-xs text-slate-500">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:block col-span-1">
          <h3 className="uppercase text-slate-900 font-bold text-xs mb-4">
            Legal
          </h3>
          <ul className="space-y-3 mb-5 text-xs text-slate-500">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
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
