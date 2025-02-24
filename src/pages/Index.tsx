
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Booking from "@/components/Booking";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black"
    >
      <Hero />
      <Product />
      <Booking />
    </motion.div>
  );
};

export default Index;
