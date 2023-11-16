import React, {useEffect, useState} from 'react'

import './dream.css'

import { BiChevronRight } from 'react-icons/bi'

import what13 from '../astro/what13.png'
import astronaut3 from '../astro/astronaut3.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'; 


const Dream = () => {

  
  useEffect(() =>{
    Aos.init({duration: 2700})
  }, [])

  return (
    <div className='dream'>
    <div className='Youth'>
    <div className='vision'>
     <img src={what13} data-aos="fade-up" />
    </div>
     <div className='Steve' data-aos="fade-down">
     <h2>Say what<br />you feel</h2>
     <p>Express yourself without words. Use stickers and GIFs or<br />share everyday moments on Status. Record a voice<br />message for a quick hello or a longer story.</p>
<a href="/blog">Learn more<BiChevronRight /></a>
    </div>
    </div>
    <div className='team'>
     <div className='deal'>
     <div className='hack' data-aos="fade-down">
      <h2>Transform<br />your business</h2>
      <p>WhatsApp Business helps you reach your customers<br />globally to deliver compelling experiences at scale.<br />Showcase your products and services, increase sales,<br />and build relationships all with WhatsApp.</p>
      <a href="/privacy">Learn more<BiChevronRight /></a>
      </div>
      <div className='quite' data-aos="fade-up">
        <img src={astronaut3}/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Dream

