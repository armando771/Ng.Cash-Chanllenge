import { Routes, Route } from "react-router-dom";
import Login from "./pages/authPages/Login";
import Register from "./pages/authPages/Register";
import AppProvider from "./context/AppContext";
import Home from "./pages/appPages/Home";

import "./App.css";

function App() {
  return (
    <main>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </AppProvider>
    </main>
  );
}

export default App;
