import React, { useState, useEffect } from 'react';
import './home.css'


import Planet from '../Components/Planet'
import Earth from '../Components/Earth'
import Hope from '../Components/Hope'
import Mars from '../Components/Mars'
import Dream from '../Components/Dream'
import Space from '../Components/Space'


// import mark from '../routes/mark.jpg'
import { PulseLoader } from 'react-spinners';



const Home = () => {

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);


  return (

    <div className='unit'>
      {
        loading ?
        (
          <div className='mill'>
          <div className='doll'>
            <PulseLoader color='#36d7b7' loading={loading} size={20} />
            <h2>the search/ khalid</h2>
          </div>
        </div>
        )
        :
        <div>
             <Planet />
      <Earth />
      <Hope />
      <Mars />
      <Dream />
      <Space />
        </div>
      }
    </div>
  )
}

export default Home