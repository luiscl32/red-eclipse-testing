// Single Responsibility: Footer component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-8 sm:py-12">
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
