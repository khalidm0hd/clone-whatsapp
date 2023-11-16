import React, { useEffect } from 'react';
import './privacy.css';
import { BiChevronRight } from 'react-icons/bi';

import shoe from '../shoe.jpg'
import nyc3 from '../privacy/nyc3.jpg';
import nyc4 from '../nyc4.jpg';
import nyc5 from '../nyc5.jpg';
import nyc7 from '../nyc7.jpg';
import nyc from '../nyc.jpg';
import nyc2 from '../nyc2.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Info from '../Info';
import Peace from '../Peace';


const Privacy = () => {
  useEffect(() => {
    Aos.init({ duration: 2700 });
  }, []);

  return (
    <div>
      <Info />
      <div className='hype'>
      <div className="going">
        <div className='Business' data-aos='fade-up'>
          <h2>Message <br /> <span>privately</span></h2>
          <p>
            Your privacy is our priority. With end-to-end
            <br />
            encryption, you can be sure that your
            <br />
            personal messages stay between you and
            <br />
            who you send them to.
          </p>
        </div>
        <div className='advice'>
          <img src={shoe} data-aos='fade-down' alt='shoe' />
        </div>
        </div>
      <div className='find' data-aos='fade-down'>
        <h2>
          Whether it's your confessions, your difficult debates, or
          <br />
          your silly inside jokes, your conversations need to<span> be<br />protected</span>
        </h2>
      </div>
      <div className='joke'>
        <div className='difficult' data-aos='fade-up'>
          <h3>End-to-end<br />encryption</h3>
          <p>
            Messages and calls stay between you.
            <br />
            No one else can read or listen to them,
            <br />
            not even WhatsApp.
          </p>
        </div>
        <div className='difficult' data-aos='fade-up'>
          <h3>Additional layers of<br />privacy</h3>
          <p>
            Beyond end-to-end encryption, we add
            <br />
            additional layers of protection to all of
            <br />
            your conversations.
          </p>
        </div>
        <div className='difficult' data-aos='fade-up'>
          <h3>Control the privacy<br />you need</h3>
          <p>
            You get to choose what you share,
            <br />
            how you show up online, or who can
            <br />
            talk to you.
          </p>
        </div>
      </div>
      <div className='lost'>
        <div className='memory'>
          <div className='plan'>
            <img src={nyc3} data-aos='fade-down' alt='NYC3' />
          </div>
          <div className='ability' data-aos='fade-up'>
            <h2>
              Chat <span>lock</span>
            </h2>
            <p>
              Password protect your most personal chats, so that no one using
              <br />
              your phone can see them.
            </p>
            <a href='/blog'>
              Learn more<BiChevronRight />
            </a>
          </div>
        </div>
        <div className='mind'>
          <div className='dunk'>
            <div className='recall' data-aos='fade-up'>
              <h2>
                <span>Disappearing</span>
                <br />messages
              </h2>
              <p>
                With disappearing messages, you can control which messages
                <br />
                stick around and for how long, by setting them up to disappear
                <br />
                after you’ve sent them.
              </p>
              <a href='/'>
                Learn more<BiChevronRight />
              </a>
            </div>
            <div className='jordan'>
              <img src={nyc4} data-aos='fade-down' alt='NYC4' />
            </div>
          </div>
          <div className='metro'>
            <div className="station">
            <div className='story'>
              <img src={nyc5} data-aos='fade-down' alt='nyc5' />
            </div>
          <div className='alarm' data-aos='fade-up'>
            <h2>
             <span>Silence</span> unknown <br />callers
            </h2>
            <p>Screen out spam and unknown contacts from calling you, so you can <br />focus on conversations that really matter to you.</p>
          </div>
        </div>
        <div className='rocket'>
                <div className='cars'>
                  <div className='global' data-aos="fade-up">
                    <h2><span>Encrypted</span> <br />backups</h2>
                    <p>Keep your online backups private. Turn on encrypted backups to <br />extend the security of end-to-end encryption to yo messages<br /> saved in iCloud or Google Drive.</p>
                    <a href="/blog">Learn more<BiChevronRight /></a>
                  </div>
                  <div className='manufactur'>
                    <img src={nyc7} data-aos="fade-down" />
                  </div>
                </div>
              <div className='flight'>
                <div className='story'>
                  <div className='leader'>
                    <img src={nyc} data-aos="fade-down" />
                    </div>
                  <div className='generation' data-aos="fade-up">
                    <h2><span>Last seen<br />and online</span></h2>
                    <p>Choose to be seen by only those you want. You can customize <br/>your privacy settings to choose who can when you’re online, <br />and when you last used WhatsApp.</p>
                  </div>
                  </div>
                  <div className='young'>
                    <div className='inspire'>
                      <div className='adult' data-aos="fade-up">
                        <h2><span>Security </span><br />
and safety</h2>
                       <p>Protect your account from hackers and scammers<br />
and stop unwanted chats.</p>
                        <a href="/">Learn more<BiChevronRight /></a>
                      </div>
                      <div className='Coin'>
                        <img src={nyc2} data-aos="fade-down" />
        </div>
      </div>
      <Peace />
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
    </div>
    </div>

  );
};

export default Privacy;