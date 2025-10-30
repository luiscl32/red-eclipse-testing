// Work section
import { Section } from '../layout';
import { useLanguage } from '../../hooks/useLanguage';

const Work = () => {
  const { t } = useLanguage();

  return (
    <Section id="work" background="dark">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">{t.work.title}</h2>
        <p className="text-base sm:text-lg md:text-xl text-white">{t.work.description}</p>
      </div>
    </Section>
  );
};

export default Work;
