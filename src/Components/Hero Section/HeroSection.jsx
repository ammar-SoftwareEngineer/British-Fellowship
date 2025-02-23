import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useRef } from "react";

import "./HeroStyle.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
// icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

// images
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import { useTranslation } from "react-i18next";
function HeroSection() {
  const swiperRef = useRef(null);
  const { t} = useTranslation();

  return (
    <div className=" min-h-screen !mt-0 !pt-0 ">
      {/* Swiper Slider */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={false}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // حفظ مرجع السوايبر
        className="absolute inset-0 w-full h-screen z-10"
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src={slide1}
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src={slide2}
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src={slide3}
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>

      {/* Content Home*/}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          {t("welcome")} <span className="text-stroke">{t("ERC-RCOG")}</span>
        </motion.h1>

        {/* Home Buttons*/}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 flex justify-center space-x-4 cursor-pointer"
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition flex items-center gap-2 cursor-pointer">
            {t("sections.courses")} <GoArrowRight className={`rtl:rotate-180`}/>
          </button>
          <button className="bg-white text-gray-900 hover:bg-gray-300 font-bold py-3 px-6 rounded-lg transition flex items-center gap-2 cursor-pointer">
          {t("sections.events")}<GoArrowRight className={`rtl:rotate-180`}/>
          </button>
        </motion.div>
      </div>

      {/* Buttons Slider*/}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between  lg:px-6 px-4 z-40">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-gray-300 bg-opacity-50 text-white md:w-12 md:h-12 w-10 h-10  flex justify-center items-center  rounded-full hover:bg-gray-700 transition cursor-pointer"
        >
          <FaArrowLeft className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 rtl:rotate-180" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-gray-200 bg-opacity-50 text-white md:w-12 md:h-12 w-10 h-10  flex justify-center items-center rounded-full hover:bg-gray-700 transition cursor-pointer"
        >
          <FaArrowRight className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
