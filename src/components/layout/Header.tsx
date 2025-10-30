// Single Responsibility: Header navigation component
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import logo from '../../assets/logo.png';

const Header = () => {
  const { t, locale, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <header className="fixed top-0 w-full bg-black/60 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 sm:h-14 md:h-16 opacity-90" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white transition-all text-sm lg:text-base px-3 py-2 rounded-lg"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(191, 9, 47, 0.7)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-white transition-all text-sm lg:text-base px-3 py-2 rounded-lg"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(191, 9, 47, 0.7)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {t.nav.work}
            </button>
            <button
              onClick={() => scrollToSection('collaborations')}
              className="text-white transition-all text-sm lg:text-base px-3 py-2 rounded-lg"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(191, 9, 47, 0.7)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {t.nav.collaborations}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white transition-all text-sm lg:text-base px-3 py-2 rounded-lg"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(191, 9, 47, 0.7)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {t.nav.contact}
            </button>

            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-teal text-white rounded-full hover:bg-teal-600 transition-colors font-medium text-sm"
            >
              {locale === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white transition-all text-left py-2 px-3 rounded-lg"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(191, 9, 47, 0.7)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="text-white transition-all text-left py-2 px-3 rounded-lg"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(191, 9, 47, 0.7)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {t.nav.work}
              </button>
              <button
                onClick={() => scrollToSection('collaborations')}
                className="text-white transition-all text-left py-2 px-3 rounded-lg"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(191, 9, 47, 0.7)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {t.nav.collaborations}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white transition-all text-left py-2 px-3 rounded-lg"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(191, 9, 47, 0.7)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {t.nav.contact}
              </button>

              <button
                onClick={toggleLanguage}
                className="px-4 py-2 bg-teal text-white rounded-full hover:bg-teal-600 transition-colors font-medium text-sm w-20"
              >
                {locale === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
