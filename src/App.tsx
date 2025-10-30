// Main App component - Entry point following SRP
import AppRouter from './routes/AppRouter';
import { useScrollToSection } from './hooks/useScrollToSection';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  useScrollToSection();

  return (
    <LanguageProvider>
      <AppRouter />
    </LanguageProvider>
  );
}

export default App;
