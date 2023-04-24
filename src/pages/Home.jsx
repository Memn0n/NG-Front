import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Cctv from '../components/Cctv'
import Electronics from '../components/Electronics'
import Lights from '../components/Lights'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Cctv/>
        <Electronics/>
        <Lights/>
        <Footer/>
    </div>
  )
}

export default Home