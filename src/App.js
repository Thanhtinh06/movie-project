import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './router';
import './css/index.css';
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
      <BrowserRouter >
        <Router />
      </BrowserRouter>
  );
}

export default App;
