import React from 'react'
import astronaut4 from '../astronaut4.jpg'
import astro from '../astro.jpg'
import astronut11 from '../astronut11.jpg'
import astronut12 from '../astronut12.jpeg'

import astronut4 from '../astronut4.jpg'
import astronut2 from '../astronut2.jpeg'

import donda2 from '../donda2.jpg'

import ReactPlayer from 'react-player'

import Iframe from 'react-iframe';



import './blog.css'
import Young from '../Young'
import Peace from '../Peace'
import Map from '../Map'

const Blog = () => {
  return (
    <div>
      <Young />
    <div className='hard'>
            <div className='choice'>
            <h3>Let's explore</h3>
        <img src={astronut4} />
        <p>Today at the annual Connect conference, Meta announced several AI products and features <br />that will soon be available on WhatsApp.</p>
        <p>We are inspired by the possibilities of Generative AI, and how it can help people be more <br />creative,productive, and entertained simply by sending a message. With so many conv<br />taking place on WhatsApp, we want to help people all over the world access this eme<br />emerging technology.</p>
        <p>To start, we’re introducing three new AI services powered by Meta that represent the <br />first steps in what we expect to be a long path of experimentation for all of us. Starting <br />today, some users can starting the following in chats with friends and family:</p>
        <li className='Speech'><b>AI stickers:</b> You can now create a custom sticker that represents a thought or idea that’s just right <br />for your chat.</li>
        <li className='Speech'><b>AI chats:</b>With Meta’s AIs, you can ask any question to find out more about topics or try and settle <br />a debate in your group chat, including getting the perspective from dozens of characters Meta has <br />created that respond in interesting ways.</li>
        <li className='Speech'><b>Photorealistic Image Generation:</b>By typing the prompt /imagine, AIs allow you to generate pic<br /> to represent an idea, place, or person.</li>
<img src={donda2} />

<p>For those who are new to the early cap abilities of Generative AI, we’ve put together <br />some basics on how these systems work to protect your privacy. The most important <br />thing to know is that your personal messages with friends and family are off limits. AIs <br />can read what is sent to them, but your personal messages remain end-to-end encry<br />, so no one else, including Meta, can see them.</p>
<p>In addition, we’re interested in helping businesses improve the quality and speed of <br />services they provide to people through the AI of their choice. We’re working behind <br />the scenes with a few partners now and we’ll have more to say about this in the iuo<br />months to come.</p>
<p>We’ll keep everyone updated in the app as we make these tools available to more people in more <br />languages. We very much look forward to your feedback and hearing about what you create.</p>
<h2>Creating New Experiences for People and <br />Businesses on WhatsApp</h2>
<p>Today at our global Conversations event in Mumbai we’re introducing several new features <br />that will help speed up how to get things done with businesses in a WhatsApp chat.</p>
<img src={astronut2} />
<p>We’re launching Flows so businesses can offer more experiences like quickly choosing your train seat, <br />ordering a meal or booking an appointment – all without leaving your chat. With Flows, businesses <br />will be able to provide rich menus and customizable forms that support different needs. We’ll <br />make Flows available to businesses around the world using the WhatsApp Business <br />Platform in the coming weeks.</p>
<h2>WhatsApp Channels Are Going Global</h2>
<img src={astronut11} />
<p>Earlier this year, we introduced a new WhatsApp app for Windows desktop, and we’re now <br />bringing the same improved experience to Mac users.</p>
<p>With the new WhatsApp app for Mac, you can now make group calls from your Mac for the first <br />time, connecting with up to 8 people on video calls and up to 32 people on audio calls. Now you <br />can join a group call after it’s started, see your call history and choose to receive incoming <br />call notifications even when the app is closed.</p>
<p>The app is redesigned to be familiar to Mac users, helping you get more done faster when <br />using WhatsApp on a large screen. You can now share files by easily dragging and <br />dropping into a chat, and can view more of your chat history.</p>
    </div>
    
    <div className='access'>
  <div className='platform'>
    <iframe src="https://www.youtube.com/embed/S_V1_pI3Duw"></iframe>
    </div>
    <div className='platform'>
    <iframe src="https://www.youtube.com/embed/3L9WL1z6wUY"></iframe>
    </div>
    <div className='platform'>
     <iframe src="https://www.youtube.com/embed/mVMt46CPwHo?si=Mzy8uIDUFF8lmLou"></iframe>
  </div>
  </div>
  <Map />
  </div>
  </div>
  )
}

export default Blog