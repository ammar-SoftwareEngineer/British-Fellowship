import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { GoBook } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
function AboutSection() {
  const { t } = useTranslation();
  return (
    <div
      className="flex items-center justify-center min-h-screen  px-6 relative"
      data-aos="fade-up"
    >
      {/* Social Icons */}
      <div className="absolute left-4 rtl:right-4 top-1/3 flex flex-col gap-3 z-30">
        <motion.button
          className="bg-[#0a8cbf] flex justify-center items-center w-10 h-10  text-white rounded-2xl cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="tel:+2010 04908240">
            <FaPhone size={16} />
          </a>
        </motion.button>
        <motion.button
          className="bg-[#0a8cbf] flex justify-center items-center w-10 h-10  text-white rounded-2xl cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://www.facebook.com/RcogErc/about?locale=ar_AR"
            target="_blank"
          >
            <FaFacebookF size={16} />
          </a>
        </motion.button>
        <motion.button
          className="bg-[#0a8cbf] flex justify-center items-center w-10 h-10  text-white rounded-2xl cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInstagram size={16} />
        </motion.button>
        <motion.button
          className="bg-[#0a8cbf] flex justify-center items-center w-10 h-10  text-white rounded-2xl cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=%2B201004908240&context=ARBVYZTVCAadbBYXjWekHpG3m0Lb6ckxJTKHOHilKnCF5v2wHOegaXvXuaB7epBgZ-hU7gy1FCBtmOWPleAqgujRYLkoD4k_rZOrVtOXRqNjngDYPJFz2gk-6540RDw5ZhTZDgk7sMdu5aEagaJ4AjfdDg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawInHuRleHRuA2FlbQIxMAABHR9ieAQiVfIP3FsasqnOz9HuPKj_MHodX9XotF-eBSBX_R3F6tnCq8OYAA_aem_PrrFXm3FVR_quyz646igYg"
            target="_blank"
          >
            <FaWhatsapp size={16} />
          </a>
        </motion.button>
      </div>

      {/* Content*/}
      <div className="flex flex-col gap-6 md:flex-row bg-white  overflow-hidden max-w-5xl">
        {/* Images*/}
        <div className="w-full h-full md:w-3/4 shadow-lg" data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg"
            alt="Students"
            className="w-full lg:h-[650px] object-cover rounded-lg "
            loading="lazy"
          />
        </div>

        {/* Text*/}
        <div
          className="w-full md:w-1/2 p-8 flex flex-col justify-center"
          data-aos="fade-left"
        >
          {/*Start Header Component */}
          <motion.h2
            className="text-3xl font-bold text-center mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="flex items-center  text-sm text-[#0a8cbf] gap-2 border-b border-black w-fit ">
              <GoBook />
              <span className="tracking-[.25em] uppercase !font-extrabold">
                {t("sections.about_us")}
              </span>
            </h1>
          </motion.h2>
          {/*End Header Component */}
          <h2 className="text-3xl lg:w-96 font-bold mt-2">
            {t("about.title.part1")}{" "}
            <span className="text-[#264cbf]">{t("about.title.part2")}</span>{" "}
            {t("about.title.part3")}
          </h2>
          <p className="text-gray-600 mt-4">{t("about.description")}</p>
          <button className="w-fit mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer flex items-center gap-2 ">
            {t("about.discover_more")}{" "}
            <GoArrowRight className={`rtl:rotate-180`} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
