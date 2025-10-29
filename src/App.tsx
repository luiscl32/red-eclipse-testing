// Main App component - Entry point following SRP
import AppRouter from './routes/AppRouter';
import { useScrollToSection } from './hooks/useScrollToSection';

function App() {
  useScrollToSection();

  return <AppRouter />;
}

export default App;
