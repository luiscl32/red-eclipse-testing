// Hero section
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';
import hero1 from '../../assets/hero1.jpg';
import { useLanguage } from '../../hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image with Fade Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src={hero1}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content - Centered */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{ color: '#BF092F' }}>
            {t.hero.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white">
            {t.hero.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
