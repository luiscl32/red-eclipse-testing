// Single Responsibility: Footer component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-white py-6 sm:py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm sm:text-base text-gray-300">
            &copy; {currentYear} Red Eclipse Testing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
