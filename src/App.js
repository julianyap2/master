import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.view';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
