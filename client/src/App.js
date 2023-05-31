import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Signup from "./functions/Signup";
import Login from "./functions/Login";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Layout />} />
       
           <Route path="/signup" element={<Signup />} />

           <Route path="/login" element={<Login />} />

           <Route path="/userpage" element={<UserPage />} />

        </Routes>
      </BrowserRouter>
      
    </div>

  );
}

export default App;