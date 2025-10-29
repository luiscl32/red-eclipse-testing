// Collaborations section
import { Section } from '../layout';
import { useLanguage } from '../../hooks/useLanguage';

const Collaborations = () => {
  const { t } = useLanguage();

  return (
    <Section id="collaborations" background="light">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-white">{t.collaborations.title}</h2>
        <p className="text-xl text-white">{t.collaborations.description}</p>
      </div>
    </Section>
  );
};

export default Collaborations;
