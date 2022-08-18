import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from "./Navbar";


const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/service' element={<Service />} />
                <Route exact path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default App;