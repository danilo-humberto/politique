import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

const RoutesPages = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    </>
  )
}

export default RoutesPages
