<<<<<<< HEAD
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
=======
import { Route, BrowserRouter, Routes } from "react-router-dom";
import EventForm from "./components/EventForm";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
      <EventForm />
    </div>
>>>>>>> jt
  );
}

export default App;