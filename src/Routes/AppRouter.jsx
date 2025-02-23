// import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HeroSection from "../Components/Hero Section/HeroSection";
import BlogSection from "../Components/Blog Section/BlogSection";
import GallerySection from "../Components/Gallery Section/GallerySection";
import CoursesSection from "../Components/Courses Section/CoursesSection";
import AboutSection from "../Components/About Section/AboutSection";
function AppRouter() {
  return (
    <>
     <Routes>
      <Route path="/Home" element={<HeroSection />} />
      <Route path="/About" element={<AboutSection />} />
      <Route path="/Courses" element={<CoursesSection />} />
      <Route path="/Gallery" element={<GallerySection />} />
      <Route path="/Blog" element={<BlogSection />} />
    </Routes>
    </>
  );
}

export default AppRouter;
