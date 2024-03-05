import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ChatAppRoutes from './routes';
import './assets/scss/themes.scss';

function App() {
  return (
    <BrowserRouter>
      <ChatAppRoutes />
    </BrowserRouter>
  );
}

export default App;
