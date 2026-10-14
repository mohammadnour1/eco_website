import { useState } from "react";
import logo from "../assets/Logo.png"
import arrow from "../assets/arrow-downward.png"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Shop  Now ", href: "#home" },
    { label: " Home Furniture", href: "#about" },
    { label: "Living Room", href: "#services" },
    { label: "About Us", href: "#work" },
    { label: "Contact Us", href: "#contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className=" w-full sticky  top-0 z-100 bg-[#EEF2FB] " dir="">
      <div className=" container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          className="shrink-0"
          href="#home"
          aria-label="العودة إلى الصفحة الرئيسية"
        >
          <img className="h-15 w-auto" src={logo} alt="" />
        </a>

        {/* <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button> */}

        <nav
          id="site-navigation"
          className="flex-1"
          aria-label="التنقل الرئيسي"
        >
          <ul className="flex items-center justify-center gap-6 whitespace-nowrap">
            {navigationItems.map((item) => (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="relative inline-flex items-center gap-1 py-2 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#C900C1] after:transition-all after:duration-300 hover:after:w-full"
                >
                  <span>{item.label}</span>
                  <img src={arrow} alt="" className="h-3 w-3 " />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="frame-2 flex shrink-0 items-center gap-3">
          <button
            className="rounded-full text-white bg-[#C900C1] py-2 px-8 mx-2 border-[#C900C1] border-2"
            onClick={closeMenu}
          >
            Log in
          </button>
          <button
            className=" rounded-full  text-[#C900C1]  ml-2 border-[#C900C1]  py-2 px-4 border-2 hover:bg-[#C900C1] hover:text-white transition duration-300"
            onClick={closeMenu}
          >
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;