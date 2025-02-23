import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaRegCalendarAlt,
  FaRegBookmark,
  FaRegDotCircle,
} from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { GoBook } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

function CoursesSection() {
  const { t } = useTranslation();
  const courses = [
    {
      id: 1,
      title: t("courses_section.revision_course.title"),
      description: t("courses_section.revision_course.description"),
      image: "https://images.pexels.com/photos/761131/pexels-photo-761131.jpeg",
    },
    {
      id: 2,
      title: t("courses_section.revision_course.title"),
      description: t("courses_section.revision_course.description"),
      image: "https://images.pexels.com/photos/761131/pexels-photo-761131.jpeg",
    },
    {
      id: 3,
      title: t("courses_section.revision_course.title"),
      description: t("courses_section.revision_course.description"),
      image: "https://images.pexels.com/photos/761131/pexels-photo-761131.jpeg",
    },
    {
      id: 4,
      title: t("courses_section.revision_course.title"),
      description: t("courses_section.revision_course.description"),
      image: "https://images.pexels.com/photos/761131/pexels-photo-761131.jpeg",
    },
    {
      id: 5,
      title: t("courses_section.revision_course.title"),
      description: t("courses_section.revision_course.description"),
      image: "https://images.pexels.com/photos/761131/pexels-photo-761131.jpeg",
    },
    {
      id: 6,
      title: t("courses_section.revision_course.title"),
      description: t("courses_section.revision_course.description"),
      image: "https://images.pexels.com/photos/761131/pexels-photo-761131.jpeg",
    },
  ];

  return (
    <div className=" min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="container mx-auto px-8">
        {/*Start Header Component */}
        <motion.h1
          className="text-3xl font-bold text-center mb-6 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div data-aos="fade-up">
            <h1 className="flex items-center justify-center text-sm text-[#0a8cbf] gap-2 border-b border-black w-fit mx-auto">
              <GoBook />
              <span className="tracking-[.25em] uppercase !font-extrabold">
                {t("courses_section.title")}
              </span>
            </h1>
            <p className="text-black pt-4">
              {t("courses_section.title.part1")}{" "}
              <span className="text-[#264cbf]">
                {t("courses_section.title.part2")}
              </span>{" "}
            </p>
          </div>
        </motion.h1>
        {/*End Header Component */}

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="w-full max-w-6xl px-6"
          data-aos="fade-up"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <motion.div
                className="bg-white rounded-lg shadow-md overflow-hidden p-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-50 object-cover rounded-md"
                />
                <div className="mt-3 ">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaRegBookmark />{" "}
                      {t("courses_section.revision_course.category")}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegCalendarAlt />{" "}
                      {t("courses_section.revision_course.date")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mt-2">{course.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {course.description}
                  </p>
                  <div className="flex gap-9 justify-between mt-4 border-b border-gray-200 pb-6">
                    <button className=" bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2 cursor-pointer">
                      {t("courses_section.revision_course.join")}{" "}
                      <GoArrowRight className={`rtl:rotate-180`} />
                    </button>
                    <button className=" bg-gray-200 text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-300 transition flex items-center gap-2 cursor-pointer">
                      {t("courses_section.revision_course.details")}
                      <GoArrowRight className={`rtl:rotate-180`} />
                    </button>
                  </div>
                  <div className="flex gap-3 mt-4 text-gray-500 text-sm  ">
                    <span className="flex items-center gap-1">
                      <FaRegDotCircle />{" "}
                      {t("courses_section.revision_course.mode")}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegDotCircle />
                      {t("courses_section.revision_course.status")}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegDotCircle />
                      {t("courses_section.revision_course.speciality")}
                    </span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center" data-aos="fade-up">
          <motion.button
            className=" mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("courses_section.more_courses")}{" "}
            <GoArrowRight className={`rtl:rotate-180`} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default CoursesSection;
