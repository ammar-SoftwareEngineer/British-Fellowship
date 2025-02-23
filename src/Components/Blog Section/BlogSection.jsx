import { motion } from "framer-motion";

import { FaRegCalendarAlt } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

import { GoArrowRight } from "react-icons/go";
import { GoBook } from "react-icons/go";
import { PiChatsCircle } from "react-icons/pi";
import { useTranslation } from "react-i18next";
function BlogSection() {
  const { t } = useTranslation();
  const blogs = [
    {
      id: 1,
      title: t("blog.article.title"),
      description: t("blog.article.description"),
      image: "https://images.pexels.com/photos/761131/pexels-photo-761131.jpeg",
      date: t("blog.article.date"),
      name: t("blog.article.author"),
      message: "03",
    },
    {
      id: 2,
      title: t("blog.article.title"),
      description: t("blog.article.description"),
      image: "https://images.pexels.com/photos/761131/pexels-photo-761131.jpeg",
      date: t("blog.article.date"),
      name: t("blog.article.author"),
      message: "03",
    },
    {
      id: 3,
      title: t("blog.article.title"),
      description: t("blog.article.description"),
      image: "https://images.pexels.com/photos/761131/pexels-photo-761131.jpeg",
      date: t("blog.article.date"),
      name: t("blog.article.author"),
      message: "03",
    },
  ];

  return (
    <div className=" flex flex-col items-center py-48">
      <div className="container mx-auto px-8">
        <motion.h1
          className="text-3xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div data-aos="fade-up">
            <h1 className="flex items-center justify-center text-sm text-[#0a8cbf] gap-2 border-b border-black w-fit mx-auto">
              <GoBook />
              <span className="tracking-[.25em] uppercase !font-extrabold">
                {t("blog.title")}
              </span>
            </h1>
            <p className="text-black pt-4 pb-4">
              {t("blog.title.part1")}{" "}
              <span className="text-[#264cbf]"> {t("blog.title.part2")}</span>
            </p>
          </div>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="flex lg:justify-center lg:flex-nowrap flex-wrap w-fit mx-auto gap-6 xl:bg-gray-100  rounded-lg"
            data-aos="fade-up"
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md p-4 xl:w-96 lg:w-75 md:w-80  md:mx-auto "
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-52 object-cover rounded-md"
                  />
                  <span className="absolute bottom-0 right-3 bg-black text-white text-xs px-2 py-1 rounded-md">
                    <FaRegCalendarAlt className="inline-block mr-1 rtl:ml-1" />
                    {blog.date}
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-gray-800 text-sm border-b border-gray-300 pb-4 justify-between">
                    <div className="flex items-center gap-2">
                      <VscAccount size={20} className="inline-block" />
                      <span className="text-base font-semibold">
                        {blog.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PiChatsCircle size={20} className="inline-block" />
                      <span className="text-base font-semibold">
                        {blog.message} {t("blog.article.comments")}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {blog.description}
                  </p>
                  <div className="mt-6">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-base font-semibold hover:bg-blue-700 transition flex items-center gap-2">
                      {t("blog.article.read_more")}{" "}
                      <GoArrowRight className={`rtl:rotate-180`} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogSection;
