
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from '../components/layout';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
