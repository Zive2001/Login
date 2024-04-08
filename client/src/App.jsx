import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import About from "./Pages/About"
import SignUp from "./Pages/SignUp"
import Signin from "./Pages/Signin"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/Profile" element ={<Profile/>}/>
      <Route path="/About" element ={<About/>}/>
      <Route path="/SignUp" element ={<SignUp/>}/>
      <Route path="/Signin" element ={<Signin/>}/>
    </Routes>


    </BrowserRouter>
  )
}

export default App