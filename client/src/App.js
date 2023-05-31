import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventForm from "./components/EventForm";
import Layout from "./components/Layout";
import useFetch from './hooks/useFetch';
import Home from "./components/Home";

function App() {
  const { data, isLoading, error } = useFetch('http://localhost:3001/events');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Now you can use the fetched data
  console.log(data);

  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/EventForm" element={<EventForm />} />
          </Routes>
       
      </Router>
    </div>
  );
}

export default App;
