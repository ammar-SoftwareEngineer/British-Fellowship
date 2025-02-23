import { motion } from "framer-motion";
import { GoBook } from "react-icons/go";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo-2.jpg";
import photo3 from "../../assets/photo3.jpg";
import { useTranslation } from "react-i18next";
function GallerySection() {
  const { t } = useTranslation();
  const photos = [
    {
      id: 1,
      src: photo1,
      alt: "Image 1",
    },
    {
      id: 1,
      src: photo2,
      alt: "Image 2",
    },
    {
      id: 1,
      src: photo3,
      alt: "Image 3",
    },
  ];
  return (
    <div className=" flex flex-col items-center py-24 ">
      <div className="container mx-auto px-8">
        {/*Start Header Component */}
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
                {" "}
                {t("gallery.title")}
              </span>
            </h1>
            <p className="text-black pt-4">
              {t("gallery.title.part1")}{" "}
              <span className="text-[#264cbf]">
                {" "}
                {t("gallery.title.part2")}
              </span>
            </p>
          </div>
        </motion.h1>
        {/*End Header Component */}
        {/*Start Photos */}
        <motion.div
          className="grid grid-cols-12 justify-items-center gap-6 pt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="lg:col-span-4 md:col-span-6 col-span-12"
              data-aos="fade-up"
            >
              <img
                className="w-96 h-96 object-cover rounded-md"
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
        {/*End Photos */}
      </div>
    </div>
  );
}

export default GallerySection;
