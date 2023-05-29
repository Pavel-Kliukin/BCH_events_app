import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventForm from './components/EventForm'
import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <Navigation /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/EventForm" element={<EventForm />} />
    </Routes>
  </Router>
  );
}

export default App;