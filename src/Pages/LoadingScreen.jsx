import { motion } from "framer-motion";
import logo from "../assets/logo.png";
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white text-white z-50">
      <div className="relative flex items-center justify-center">
        {/* صورة اللوجو ثابتة */}
        <img src={logo} alt="Logo" className="w-24 h-24 relative z-10" />

        {/* الدائرة المتحركة حول اللوجو */}
        <motion.div
          className="absolute w-32 h-32 border-4 border-t-[#0a8cbf] border-b-transparent border-l-[#0a8cbf] border-r-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        ></motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
