// Work section
import { Section } from '../layout';
import { useLanguage } from '../../hooks/useLanguage';
import { useInView } from '../../hooks/useInView';

// Simple placeholder icons - can be replaced with YesIcon icons
const QualityIcon = () => (
  <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
    <path d="M12 8v8m-4-4h8" />
  </svg>
);

const FlexibilityIcon = () => (
  <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 5v14m7-7H5" />
    <path d="m5 12l3-3m-3 3l3 3m10-3l3-3m-3 3l3 3" />
  </svg>
);

const CommunicationIcon = () => (
  <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 10h8M8 14h4" />
  </svg>
);

const StandardisationIcon = () => (
  <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

const icons = [QualityIcon, FlexibilityIcon, CommunicationIcon, StandardisationIcon];

// Testing Technique Icons
const AdHocIcon = () => (
  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const ProgressionIcon = () => (
  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="m9 16 2 2 4-4" />
  </svg>
);

const RegressionIcon = () => (
  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
    <path d="M16.24 7.76a6 6 0 0 1-8.49 8.49" />
  </svg>
);

const techniqueIcons = [AdHocIcon, ProgressionIcon, RegressionIcon];

const Work = () => {
  const { t } = useLanguage();
  const servicesView = useInView({ threshold: 0.1 });
  const techniquesView = useInView({ threshold: 0.1 });

  return (
    <Section id="work" background="dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            {t.work.subtitle}
          </h2>
        </div>

        {/* Services Grid */}
        <div ref={servicesView.ref} className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {t.work.services.map((service, index) => {
            const IconComponent = icons[index];
            return (
              <div
                key={service.title}
                className={`border-2 border-white rounded-lg p-8 lg:p-10 bg-black/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:bg-black/50 duration-700 ${
                  servicesView.isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Text content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="shrink-0 text-white order-first md:order-last">
                    <IconComponent />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testing Techniques Section */}
        <div className="mt-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white text-center">
            {t.work.techniquesTitle}
          </h3>

          <div ref={techniquesView.ref} className="grid md:grid-cols-3 gap-8">
            {t.work.techniques.map((technique, index) => {
              const TechniqueIcon = techniqueIcons[index];
              return (
                <div
                  key={technique.title}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-700 border border-white/20 ${
                    techniquesView.isInView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Icon */}
                  <div className="mb-6 h-32 flex items-center justify-center">
                    <div className="text-white">
                      <TechniqueIcon />
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold mb-3 text-white text-center">
                    {technique.title}
                  </h4>
                  <p className="text-sm text-white/90 leading-relaxed text-center">
                    {technique.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Work;
