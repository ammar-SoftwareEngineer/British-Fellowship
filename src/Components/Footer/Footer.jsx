import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#264f73]">
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" text-white py-10 container mx-auto md:px-24 px-8"
      >
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8   border-b border-gray-400 pb-5">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={logo} alt="RCOG Logo" className=" w-20" />
            <p className="mt-4 text-sm ">{t("footer.logo_text")}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-3 border-b-4 border-gray-500  w-fit pb-2 relative">
              <span className="before:content-[''] before:absolute before:w-1/2 before:h-[4px] before:bg-[#0a8cbf] before:bottom-[-4px] before:left-5"></span>
              {t("footer.quick_links")}
            </h3>

            <ul className="md:space-y-2 space-y-5 text-sm">
              {[
                "About Us",
                "Home",
                "Gallery",
                "Courses",
                "News",
                "Contact",
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer flex items-center gap-2 text-sm"
                  >
                    <IoMdArrowDropright size={25} className="text-[#0a8cbf]" />
                    {t(`navigation.${link}`)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Courses */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-3 border-b-4 border-gray-500  w-fit pb-2 relative">
              <span className="before:content-[''] before:absolute before:w-1/2 before:h-[4px] before:bg-[#0a8cbf] before:bottom-[-4px] before:left-5"></span>
              {t("footer.our_courses")}
            </h3>

            <ul className="md:space-y-2 space-y-5 text-sm md:mt-0 mt-6">
              {[
                "Training courses MRCOG",
                "Revision courses MRCOG",
                "Franchise courses MRCOG",
                "Training (Hands-on / online)",
                "Webinars",
              ].map((course, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <a href="#" className=" flex items-center gap-2 text-sm ">
                    <IoMdArrowDropright size={25} className="text-[#0a8cbf]" />{" "}
                    {t(`courses.${course}`)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-3 border-b-4 border-gray-500  w-fit pb-2 relative">
              <span className="before:content-[''] before:absolute before:w-1/2 before:h-[4px] before:bg-[#0a8cbf] before:bottom-[-4px] before:left-5"></span>
              {t("footer.contact_us")}
            </h3>

            <ul className="md:space-y-2 space-y-5 text-sm md:mt-0 mt-6">
              <motion.li
                className="flex items-center  md:justify-start gap-2 cursor-pointer  md:mt-4  mt-8"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="bg-[#0a8cbf] flex justify-center items-center w-8 h-8  text-white rounded-lg  ">
                  <IoCallOutline size={20} />
                </div>
                <a href="tel:+2010 04908240" dir="ltr">+2010 04908240</a>
              </motion.li>
              <motion.li
                className="flex items-center w-full md:justify-start gap-2 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="bg-[#0a8cbf] flex justify-center items-center !w-8 !h-8  text-white rounded-lg flex-nowrap ">
                  <MdOutlineLocationOn size={20} />
                </div>
                <span className="">
                {t("footer.address")}
                </span>
              </motion.li>
              <motion.li
                className="flex items-center  md:justify-start gap-2 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="bg-[#0a8cbf] flex justify-center items-center w-8 h-8  text-white rounded-lg  ">
                  <MdOutlineMail size={20} />
                </div>
                <a href="mailto:erc_rcog@hotmail.com">info@RCOG.com</a>
              </motion.li>
            </ul>

            {/* Social Icons */}
            <div className="flex md:mt-4 md:justify-start gap-3 mt-8">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="bg-white p-2 rounded-full text-[#1f3b63] hover:bg-gray-300 transition"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Icon />
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="  mt-6 pt-4 text-base"
        >
         {t("footer.copyright")} <span className="text-black">{t("footer.copyright.part1")}</span> {t("footer.copyright.part2")}
       
        </motion.div>
      </motion.footer>
    </div>
  );
}

export default Footer;
