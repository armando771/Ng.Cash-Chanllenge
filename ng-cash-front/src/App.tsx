import { Routes, Route } from "react-router-dom"
import Login from "./pages/authPages/Login"
import Register from "./pages/authPages/Register"

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/Register" element={ <Register /> } />
      </Routes>
    </main>
  )
}

export default App
