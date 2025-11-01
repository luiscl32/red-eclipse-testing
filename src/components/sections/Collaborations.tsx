// Collaborations section
import { Section } from '../layout';
import { useLanguage } from '../../hooks/useLanguage';
import { useState } from 'react';
import tt7Logo from '../../assets/TT7-logo.png';
import tt7Bg from '../../assets/TIT.jpg';
import raincupLogo from '../../assets/raincup-logo.png';
import raincupBg from '../../assets/raincup-game.png';

interface CollaborationCardProps {
  name: string;
  logo: string;
  backgroundImage: string;
  games: Array<{ title: string; description: string }>;
}

const CollaborationCard = ({ name, logo, backgroundImage, games }: CollaborationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <div
      className="relative h-96 rounded-lg overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with overlay */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Default background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 transition-opacity duration-500 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center p-8">
        <div className={`flex-1 flex items-center justify-center ${isHovered ? '' : 'pb-0'}`}>
          {/* Logo */}
          <div
            className={`transition-all duration-700 ease-out ${
              isHovered ? 'translate-y-[-30px]' : 'translate-y-0'
            }`}
          >
            <img
              src={logo}
              alt={name}
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>

        {/* Game info - fades in on hover */}
        <div
          className={`text-center transition-all duration-700 ${
            isHovered ? 'opacity-100 translate-y-0 flex-1 flex flex-col justify-start' : 'opacity-0 translate-y-4 h-0'
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-4">{name}</h3>

          {games.map((game, index) => (
            <div key={index} className="mb-3">
              <p className="text-lg font-semibold text-white mb-2">
                {t.collaborations.testedGame}: <span className="text-red-400">{game.title}</span>
              </p>
              {game.description && (
                <p className="text-sm text-white/90 leading-relaxed max-w-md mx-auto">
                  {game.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Collaborations = () => {
  const { t } = useLanguage();

  const collaborationsData = [
    {
      name: t.collaborations.partners[0].name,
      logo: tt7Logo,
      backgroundImage: tt7Bg,
      games: t.collaborations.partners[0].games
    },
    {
      name: t.collaborations.partners[1].name,
      logo: raincupLogo,
      backgroundImage: raincupBg,
      games: t.collaborations.partners[1].games
    }
  ];

  return (
    <Section id="collaborations" background="light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white text-center">
          {t.collaborations.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {collaborationsData.map((collab, index) => (
            <CollaborationCard
              key={index}
              name={collab.name}
              logo={collab.logo}
              backgroundImage={collab.backgroundImage}
              games={collab.games}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Collaborations;
