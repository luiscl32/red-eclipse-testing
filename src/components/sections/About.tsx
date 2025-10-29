// About section
import { Section } from '../layout';
import { useLanguage } from '../../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();

  return (
    <Section id="about" background="light">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-white">{t.about.title}</h2>
        <p className="text-xl text-white">{t.about.description}</p>
      </div>
    </Section>
  );
};

export default About;
