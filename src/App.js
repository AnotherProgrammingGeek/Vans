import './App.css';
import React from 'react';
import{Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/VanDetail/VanDetail"

import "./server"
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVansDetail from './pages/Host/HostVansDetail';

function App() {
  return (
    <>
    <Routes>
      <Route path= "/" element= {<Layout />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='vans' element={<Vans />}/>
        <Route path='vans/:id' element={<VanDetail />}/>
        <Route path='host' element={<HostLayout />}>
          <Route index element={<Dashboard/>}/>
          <Route path='income' element={<Income />}/>
          <Route path='vans' element={<HostVans />}/>
          <Route path='vans/:id' element={<HostVansDetail />}/>
          <Route path='reviews' element={<Reviews />}/>
        </Route>

      </Route>
    </Routes>
    </>
  );
}

export default App;
