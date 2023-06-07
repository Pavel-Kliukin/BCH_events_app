
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useFetch from './hooks/useFetch';
import Home from "./pages/Home"
import Events from "./pages/Events";
import Signup from "./functions/Signup";
import Login from "./functions/Login";
import UserPage from "./pages/UserPage";
import Seminars from "./pages/Seminars";
import EventDetails from "./details-page/EventDetails";
import SeminarDetails from "./details-page/SeminarDetails";
import EventForm from "./components/EventForm";


function App() {
  const eventsURL = 'http://localhost:3001/events';
  const usersURL = 'http://localhost:3001/users';
  const seminarsURL = 'http://localhost:3001/seminars';

  const eventForm = 'http://localhost:3001/eventForm';

  const eventsFetch = useFetch(eventsURL);
  const usersFetch = useFetch(usersURL);
  const seminarsFetch = useFetch(seminarsURL);

  if (eventsFetch.isLoading || usersFetch.isLoading || seminarsFetch.isLoading) {
    return <div>Loading...</div>;
  }

  if (eventsFetch.error || usersFetch.error || seminarsFetch.error) {
    return <div>Error: {eventsFetch.error || usersFetch.error || seminarsFetch.error}</div>;
  }

   // Use the fetched data
   const eventsData = eventsFetch.data;
   const usersData = usersFetch.data;
   const seminarsData = seminarsFetch.data;

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
            <Route path="/eventForm" element={<EventForm />} />
            <Route path="/events/:eventId" element={<EventDetails events={eventsData} users={usersData} seminars={seminarsData} />} />

            <Route path="/seminars/:seminarId" element={<SeminarDetails events={eventsData} seminars={seminarsData} />} /> 

          </Routes>
       </Router>

    </div>
  );
}

export default App;
