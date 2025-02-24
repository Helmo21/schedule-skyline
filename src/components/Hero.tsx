
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Welcome
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mt-4">
            Expert Consultations
          </h1>
          <p className="text-lg md:text-xl text-primary-light max-w-2xl mx-auto">
            Transform your experience with professional guidance and personalized solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-black px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
