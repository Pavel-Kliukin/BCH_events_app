
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useFetch from './hooks/useFetch';
import Home from "./components/Home"
import Events from "./components/Events";
import Signup from "./functions/Signup";
import Login from "./functions/Login";
import UserPage from "./components/UserPage";
import Seminars from "./components/Seminars";
import EventDetails from "./event-details/EventDetails";


function App() {
  const eventsURL = 'http://localhost:3001/events';
  const usersURL = 'http://localhost:3001/users';

  const eventsFetch = useFetch(eventsURL);
  const usersFetch = useFetch(usersURL);

  if (eventsFetch.isLoading || usersFetch.isLoading) {
    return <div>Loading...</div>;
  }

  if (eventsFetch.error || usersFetch.error) {
    return <div>Error: {eventsFetch.error || usersFetch.error}</div>;
  }

   // Use the fetched data
   const eventsData = eventsFetch.data;
   const usersData = usersFetch.data;

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

            <Route path="/events/:eventId" element={<EventDetails events={eventsData} users={usersData} />} /> 

          </Routes>
       </Router>

    </div>
  );
}

export default App;
