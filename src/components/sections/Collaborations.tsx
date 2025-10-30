// Collaborations section
import { Section } from '../layout';
import { useLanguage } from '../../hooks/useLanguage';

const Collaborations = () => {
  const { t } = useLanguage();

  return (
    <Section id="collaborations" background="light">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">{t.collaborations.title}</h2>
        <p className="text-base sm:text-lg md:text-xl text-white">{t.collaborations.description}</p>
      </div>
    </Section>
  );
};

export default Collaborations;
