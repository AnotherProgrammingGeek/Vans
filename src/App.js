import './App.css';
import React from 'react';
import{Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Vans, {loader as vanLoader} from "./pages/Vans/Vans"
import VanDetail, {loader as vanDetailLoader} from "./pages/VanDetail/VanDetail"
import "./server"
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
// import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout/HostLayout';
import HostVans , {loader as vanHostLoader}from './pages/Host/HostVans';
import HostVansDetail from './pages/Host/HostVansDetail';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import NotFound from './pages/NotFound/NotFound';
import Error from './components/Error/Error';
import Login from './pages/Login/Login';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(

      <Route path= "/" element= {<Layout />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='vans' element={<Vans />} errorElement={<Error/>} loader={vanLoader}/>
        <Route path='vans/:id' element={<VanDetail />} loader={vanDetailLoader} />
        <Route path='login' element={<Login/>}/>
        
        <Route path='host' element={<HostLayout />}>
          <Route index element={<Dashboard/>}/>
          <Route path='income' element={<Income />}  />
          <Route path='vans' element={<HostVans />} loader={vanHostLoader}/>
          <Route path='vans/:id' element={<HostVansDetail />}>
            <Route index element={<HostVanInfo/>} />
            <Route path='pricing' element={<HostVanPricing/>} />
            <Route path='photos' element = {<HostVanPhotos/>}/>

          </Route>
          {/* <Route path='reviews' element={<Reviews />} /> */}
        </Route>
        <Route path='*' element= {<NotFound />}/>

      </Route>
  ))

  return (
    <RouterProvider router={router}/>
    
    
  );
}

export default App;
