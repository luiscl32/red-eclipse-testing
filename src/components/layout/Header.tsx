// Single Responsibility: Header navigation component
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import logo from '../../assets/logo.png';

const Header = () => {
  const { t, locale, toggleLanguage } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>

          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-teal transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-white hover:text-teal transition-colors"
            >
              {t.nav.work}
            </button>
            <button
              onClick={() => scrollToSection('collaborations')}
              className="text-white hover:text-teal transition-colors"
            >
              {t.nav.collaborations}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-teal transition-colors"
            >
              {t.nav.contact}
            </button>

            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-teal text-white rounded-full hover:bg-teal-600 transition-colors font-medium"
            >
              {locale === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
