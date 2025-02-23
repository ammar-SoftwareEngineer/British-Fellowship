import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logo.png";
import "../../style/global.css";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu) =>
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  const [bgColor, setBgColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgColor("bg-black/60 shadow-md transition duration-300");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { t, i18n } = useTranslation();


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const language = i18n.language;

  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      language === "ar" ? "rtl" : "ltr"
    );
  }, [language]);
  return (
    <nav className={` text-white fixed w-full ${bgColor} top-0 z-50 `}>
      <div className="container mx-auto flex !items-center justify-between lg:px-24 px-4">
        {/* Logo */}
        <Link to="#" className="flex items-center py-4">
          <img src={logo} alt="Logo" className="w-16" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 font-semibold">
          {["Home", "About Us", "Courses", "News", "Contact"].map((item) => (
            <li key={item} className="hover:text-blue-400 cursor-pointer">
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                {t(`navigation.${item}`)}
              </Link>
            </li>
          ))}
          {["Events", "Gallery"].map((item) => (
            <li key={item} className="relative">
              <button
                onClick={() => toggleDropdown(item)}
                className="flex items-center hover:text-blue-400  cursor-pointer"
              >
                {t(`navigation.${item}`)}
                <ChevronDown size={16} className="ml-1" />
              </button>
              {dropdownOpen === item && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-32 bg-white text-black shadow-lg rounded-lg"
                >
                  <li className="p-2 hover:bg-gray-200  !rounded-t-lg !cursor-pointer">
                    {t(`navigation.item`)} 1
                  </li>
                  <li className="p-2 hover:bg-gray-200  !rounded-b-lg !cursor-pointer">
                    {t(`navigation.item`)} 2
                  </li>
                </motion.ul>
              )}
            </li>
          ))}
        </ul>

        {/* Language Button */}
        <button
          className="hidden lg:block bg-[#0a8cbf] !px-5 !py-3 rounded-lg font-bold !cursor-pointer"
          onClick={() => changeLanguage(language === "ar" ? "en" : "ar")}
        >
          {t("navigation.language")}
        </button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-black bg-opacity-90 p-4"
        >
          <ul className="space-y-4 text-center font-semibold">
            {["Home", "About Us", "Courses", "News", "Contact"].map((item) => (
              <li key={item} className="hover:text-blue-400">
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  {t(`navigation.${item}`)}
                </Link>
              </li>
            ))}
            {["Events", "Gallery"].map((item) => (
              <li key={item} className="relative">
                <button
                  onClick={() => toggleDropdown(item)}
                  className="flex justify-center items-center w-full"
                >
                  {t(`navigation.${item}`)}
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {dropdownOpen === item && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-2 bg-white text-black shadow-lg rounded-lg"
                  >
                    <li className="p-2 hover:bg-gray-200 cursor-pointer !rounded-t-lg">
                      {t(`navigation.item`)} 1
                    </li>
                    <li className="p-2 hover:bg-gray-200 cursor-pointer !rounded-b-lg">
                      {t(`navigation.item`)} 2
                    </li>
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>
          <button
            className="w-full mt-4 bg-[#0a8cbf] !px-5 !py-3 rounded-lg font-bold !cursor-pointer"
            onClick={() => changeLanguage(language === "ar" ? "en" : "ar")}
          >
            {t("navigation.language")}
          </button>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
