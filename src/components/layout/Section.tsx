// Single Responsibility: Section wrapper with animations
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  background?: 'light' | 'dark' | 'gradient';
  className?: string;
}

const Section = ({
  children,
  id,
  background = 'light',
  className = ''
}: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className={`py-12 sm:py-16 md:py-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
