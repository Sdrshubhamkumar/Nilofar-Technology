import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/Navbar/TopNavBar'
import MainNavbar from './components/Navbar/MainNavbar'
import Home from './pages/home/home'
import Introduction from './pages/AboutUs/Introduction'
import VisionAndMission from './pages/AboutUs/VisionAndMission'
import WhyChooseUs from './pages/AboutUs/WhyChooseUs'
import WebsiteDevelopment from './pages/WhatWeDo/WebsiteDevelopment/WebsiteDevelopment';  
import CustomizedSoftwareDevelopment from './pages/WhatWeDo/CustomizedDevelopment/CustomizedSoftwareDevelopment'; // Assuming this is the correct path
import MobileApplication from './pages/WhatWeDo/MobileDevelopment/MobileApplication';
import School from './pages/Products/SchoolERP/School'; // Assuming this is the correct path
import Hospital from './pages/Products/HospitalERP/Hospital'; // Assuming this is the correct path
import Clinic from './pages/Products/ClinicManagement/Clinic'; // Assuming this is the correct path
import Restaurant from './pages/Products/RestaurantBilling/Restaurant'; // Assuming this is the correct path
import HotelManagement from './pages/Products/HotelManagement/Hotel'; // Assuming this is the correct path
import Inventory from './pages/Products/InventoryManagement/Inventory'; // Assuming this is the correct path
import Career from './pages/Career/Career'; // Assuming this is the correct path
import Contact from './pages/ContactUs/Contact'; // Assuming this is the correct path
import Enquire from './pages/GetAQuote/Enquire'; // Assuming this is the correct path

const App = () => {
  return (
    <Router>
      
      <TopNavbar />
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/Vision&Mission" element={<VisionAndMission/>}/>
        <Route path="/why-choose-us" element={<WhyChooseUs/>}/>
        <Route path="/website-development" element={<WebsiteDevelopment/>}/>
        <Route path='custom-software' element={<CustomizedSoftwareDevelopment/>}/>
        <Route path="/mobile-apps" element={<MobileApplication/>}/>
        <Route path="/school-erp" element={<School/>}/>
        <Route path='/Hospital-erp' element={<Hospital/>}/>
        <Route path='/clinic-management' element={<Clinic/>}/>
        <Route path='/restaurant-billing' element={<Restaurant/>}/>
        <Route path='/hotel-management' element={<HotelManagement/>}/>
        <Route path='/inventory-management' element={<Inventory/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/enquire-now' element={<Enquire/>}/>
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
