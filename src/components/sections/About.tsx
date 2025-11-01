// About section
import { Section } from '../layout';
import { useLanguage } from '../../hooks/useLanguage';
import logo from '../../assets/logo.png';

// Helper function to convert **text** to bold
const formatText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const About = () => {
  const { t } = useLanguage();

  return (
    <Section id="about" background="light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-white text-center">
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Logo */}
          <div className="order-2 md:order-1 flex items-center justify-center">
            <img
              src={logo}
              alt="Red Eclipse Testing Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Description */}
          <div className="order-1 md:order-2 space-y-4">
            {t.about.description.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg text-white leading-relaxed">
                {formatText(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
