// Hero section
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { fadeInUp } from '../../animations/variants';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t.hero.description}
            </p>
            <button className="px-8 py-4 bg-teal text-white rounded-lg hover:bg-teal-600 transition-colors font-semibold text-lg">
              {t.hero.cta}
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-full h-96 bg-accent/30 rounded-lg flex items-center justify-center">
              <span className="text-white text-6xl">🎮</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
