import Footer from "./Components/Footer/Footer";

import Navbar from "./Components/Navbar/Navbar";
import "./style/global.css";

import HeroSection from "./Components/Hero Section/HeroSection";
import AboutSection from "./Components/About Section/AboutSection";
import CoursesSection from "./Components/Courses Section/CoursesSection";
import GallerySection from "./Components/Gallery Section/GallerySection";
import BlogSection from "./Components/Blog Section/BlogSection";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingScreen from "./Pages/LoadingScreen";
import "./translate/i18n.js";
import { useTranslation } from "react-i18next";
function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    AOS.init({ delay: 100, duration: 500, easing: "ease-out" });
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const language = i18n.language;

  useEffect(() => {
    setIsLoading(true); // 🔄 تفعيل شاشة التحميل عند تغيير اللغة

    const timer = setTimeout(() => setIsLoading(false), 3000); // ⏳ الانتظار لمدة 3 ثوانٍ

    return () => clearTimeout(timer); // 🚀 تنظيف المؤقت عند تغيير اللغة قبل انتهاء الـ 3 ثوانٍ
  }, [language]);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <div id="Home">
            <HeroSection />
          </div>
          <div id="About Us">
            <AboutSection />
          </div>
          <div id="Courses">
            <CoursesSection />
          </div>
          <div id="Gallery">
            <GallerySection />
          </div>
          <div id="News">
            <BlogSection />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
