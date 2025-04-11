// need to install react-router-dom 
// npm i react-router-dom

import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Error from "./Error"

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact/:subject" element={<Contact/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
