import React, {useEffect, useState} from 'react'
import './earth.css'


import what8 from '../astro/what8.png'
import what10 from '../astro/what10.png'
import what11 from '../astro/what11.png'
import what12 from '../astro/what12.png'
//import what15 from '../astro/what15.png'
import what5 from '../astro/what5.png'

import Typed from 'react-typed';

import Aos from 'aos'
import 'aos/dist/aos.css'; 


const Earth = () => {


  useEffect(() =>{
    Aos.init({})
  }, [])




  return (
    <div className='voice'>
      <div className='outside'>
        <h1>Find your<br />
        <Typed
                strings={[
                    'purpose!']}
                    typeSpeed={120}
                    backSpeed={150}
                    loop >
                </Typed></h1>
        <p>taught myself how to code,<br />i wonder what's next <br />for me.</p>
        </div>
        <div className='cap'>
          <div className='film'>
          <img src={what8} className='loop' data-aos="fade-up" data-aos-duration="2000"  offset="520" />
          <img src={what10} className='quick' data-aos="fade-up" data-aos-duration="2600"/>
          <img src={what11} className='people' data-aos="fade-up" data-aos-duration="2700" />
          <img src={what12} className='yolo' data-aos="fade-up" data-aos-duration="2900" />
          </div>
          </div>
  </div>
  )
}

export default Earth