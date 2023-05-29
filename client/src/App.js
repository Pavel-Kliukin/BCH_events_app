import { Route, BrowserRouter, Routes } from "react-router-dom";
import EventForm from "./components/EventForm";
import Layout from "./components/Layout";
/* import Home from "./components/Home"; */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
        {/*   <Route path="/" element={<Home />} /> */}
           <Route path="/EventForm" element={<EventForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <EventForm />
    </div>

  );
}

export default App;