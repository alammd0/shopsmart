import { Route, Routes } from "react-router-dom"
import MainLayout from "./MainLayout"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

function App() {

  return (
    <>
      <Routes>
         <Route path="/" element={<MainLayout/>}>
            <Route path="/" element = {<Home />} />
           
         </Route>

          <Route path="/register" element = { <Signup />} />
          <Route path="/login" element = { <Login />} />
      </Routes>
    </>
  )
}

export default App
