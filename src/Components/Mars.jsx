import React, {useEffect, useState} from 'react'


import './mars.css'

import iman from '../astro/iman.png'
import cobra from '../astro/cobra.jpg'



import { BiChevronRight } from 'react-icons/bi'




import Aos from 'aos'
import 'aos/dist/aos.css'; 



const Mars = () => {

  useEffect(() =>{
    Aos.init({duration: 2700})
  }, [])


  return (
    <div className='mars'>
    <div className='community'>
    <div className='state'>
     <img src={iman} data-aos="fade-up" />
    </div>
     <div className='apple' data-aos="fade-down">
     <h2>Speak<br/><span>freely</span></h2>
     <p>With end-to-end encryption, your personal messages and <br />calls are secured. Only you and the person you're talking <br />to can read or listen to them, and nobody in between, not <br />even WhatsApp.</p>
<a href="/blog">Learn more<BiChevronRight /></a>
    </div>
    </div>
    <div className='light'>
     <div className='the'>
     <div className='sky' data-aos="fade-down">
      <h2>Keep in touch<br />
      with your groups</h2>
      <p>Whether it's planning an outing with friends or simply<br />staying on top of your family chats, group conversations<br />should feel effortless.</p>
      <a href="/privacy">Learn more<BiChevronRight /></a>
      </div>
        <div className='mention'>
        <img src={cobra} data-aos="fade-up" />
      </div>
      </div>
      </div>
     </div>
  )
}

export default Mars