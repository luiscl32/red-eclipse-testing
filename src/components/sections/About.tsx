// About section
import { Section } from '../layout';
import { useLanguage } from '../../hooks/useLanguage';
import redEclipseCard from '../../assets/red-eclipse-card.png';

const About = () => {
  const { t } = useLanguage();

  return (
    <Section id="about" background="light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-white text-center">
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src={redEclipseCard}
              alt="Red Eclipse Testing"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Description */}
          <div className="order-1 md:order-2">
            <p className="text-base sm:text-lg text-white leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
