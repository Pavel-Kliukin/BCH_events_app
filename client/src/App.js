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
  );
}

export default App;
