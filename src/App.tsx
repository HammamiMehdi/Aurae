
import { useNavigate } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';



function App() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/inscription-agence');
  };
//
  return <Home onSignupClick={handleSignupClick} />;
}

export default App;