import React from 'react'
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Header from "./container/Header/Header"
import Brand from "../src/components/brand/Brand"
import WhatGPT3 from "./container/whatGPT3/WhatGpt3"
import Features from "./container/Features/Feature"
import Possibility from "./container/Possibility/Possibility"  
import CTA from "./components/Cta/CTA"
import Blog from "./container/Blog/Blog"
import Footer from "./container/Footer/Footer"

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
      </div>
  )
}

export default App;
