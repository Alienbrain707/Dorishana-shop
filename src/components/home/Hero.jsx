import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Fashion Model"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 lg:px-12">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 tracking-[6px] uppercase text-yellow-400"
          >
            Luxury Women's Fashion
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl font-bold leading-tight text-white md:text-8xl"
          >
            Elevate
            <br />
            Your Style
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-gray-300"
          >
            Discover timeless fashion designed for confident, elegant women.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex gap-4"
          >
            <button className="rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black transition hover:scale-105">
              Shop Now
            </button>

            <button className="rounded-full border border-yellow-400 px-8 py-3 text-yellow-400 transition hover:bg-yellow-400 hover:text-black">
              View Collection
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}