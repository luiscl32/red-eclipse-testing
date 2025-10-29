// Custom hook for smooth scrolling to sections
import { useEffect } from 'react';

export const useScrollToSection = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;

      if (target.tagName === 'A' && target.hash) {
        const href = target.getAttribute('href');

        if (href?.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);

          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};
