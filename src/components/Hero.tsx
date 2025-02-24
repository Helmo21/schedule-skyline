
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center py-20 px-4 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(184.1deg,rgba(249,255,182,0.05)_44.7%,rgba(226,255,172,0.05)_67.2%)]" />
      
      {/* Abstract Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Clock Circle */}
          <motion.circle
            cx="70"
            cy="30"
            r="15"
            stroke="#98FFB3"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Growth Lines */}
          <motion.path
            d="M20,80 L40,60 L60,70 L80,40"
            stroke="#98FFB3"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Abstract Coins */}
          <motion.circle
            cx="30"
            cy="30"
            r="8"
            stroke="#98FFB3"
            strokeWidth="0.5"
            fill="none"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.circle
            cx="80"
            cy="70"
            r="10"
            stroke="#98FFB3"
            strokeWidth="0.5"
            fill="none"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full backdrop-blur-sm">
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

      {/* Floating Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          style={{
            top: `${20 + i * 30}%`,
            left: `${10 + i * 30}%`,
            width: "8px",
            height: "8px",
            border: "1px solid rgba(152, 255, 179, 0.3)",
            borderRadius: "50%"
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}
    </section>
  );
};

export default Hero;
