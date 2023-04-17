 import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import SecondContent from "./Components/SecondContent";
import Testimonial from "./Components/Testimonial";
import TestimonialData from "./Components/TestimonialData";
import Footer from "./Components/Footer";
import Item from "./Components/Item";
import LoginModal from "./Components/LoginModal";
import RegisterModal from "./Components/RegisterModal";
import CartItem from "./Components/CartItem";

function App() {
    //  const[display,setDisplay]=useState(false);
    
 
  return (
    <>
   

  
    <Routes>


      <Route path="/login" element={ <LoginModal /> } />
      <Route path='/register' element={<RegisterModal/>}/>
  
    </Routes>
     
      <section className="h-screen bg-Hero bg-no-repeat bg-cover md:bg-top bg-center ">
      <Navbar />
      <MainContent />
    
      </section>
      <SecondContent />
      <Item />
      <Testimonial slides={TestimonialData} />
      
      <CartItem/>
      
      <Footer />
      </>
  );
}

export default App;
