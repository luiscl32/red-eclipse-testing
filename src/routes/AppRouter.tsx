// Single Responsibility: Application routing configuration
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from '../components/layout';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
