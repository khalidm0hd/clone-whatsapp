import React, {useEffect, useState} from 'react'


import what5 from '../astro/what5.png'
import what6 from '../astro/what6.png'
import jamorant4 from '../astro/jamorant4.png'
import { BiChevronRight } from 'react-icons/bi'

import './hope.css'


import Aos from 'aos'
import 'aos/dist/aos.css'; 


const Hope = () => {


  useEffect(() =>{
    Aos.init({duration: 2700})
  }, [])



  return (
    <div className='elon'>
    <div className='musk'>
        <img src={what5} data-aos="fade-up" />
        <h2 data-aos="fade-right" >With private messaging and calling, you can<br />be yourself, speak freely and feel close to the<br />most important people in your life no matter<br />where they are.</h2>
        <img src={what6} data-aos="fade-up"  />
        </div>
        <div className='strong'>
          <div className='know'>
            <div className='live'>
            <h2 data-aos="fade-up">Never miss a <br />moment with<br />voice and video<br />calls</h2>
            <p data-aos="fade-up">From a group call to classmates to a quick call with mom,<br />feel like you’re in the same room with voice and video<br />calls.</p>
            <a href="/privacy">Learn more<BiChevronRight data-aos="fade-up"/></a>
            </div>
            <div className='focus'>
            <img src={jamorant4} data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" />
        </div>
    </div>
    </div>
    </div>

  )
}

export default Hope