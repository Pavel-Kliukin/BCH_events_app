
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useFetch from './hooks/useFetch';
import Home from "./components/Home"
import Events from "./components/Events";
import Signup from "./functions/Signup";
import Login from "./functions/Login";
import UserPage from "./components/UserPage";
import Seminars from "./components/Seminars";


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
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/seminars" element={<Seminars />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userpage" element={<UserPage />} />
          </Routes>
       
      </Router>

    </div>
  );
}

export default App;
