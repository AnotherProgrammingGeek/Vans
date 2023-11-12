import './App.css';
import React from 'react';
import{Route, Routes,Link} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/VanDetail/VanDetail"

import "./server"

function App() {
  return (
    <>
    <header>
      <Link className='site-logo' to="/">#MyLife</Link>
      <nav>
        <Link to="about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/vans' element={<Vans />}/>
      <Route path='/vans/:id' element={<VanDetail />}/>

    </Routes>
    </>
  );
}

export default App;
