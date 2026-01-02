import React from 'react'
import { assets } from '../../assets/assets'
import './Appdown.css'
const Appdow = () => {
  return (
    <div className='app-download' id='app-sownload'>
        <p>For Better Experience Download <br />
        Let's Order App</p>
        <div className='app-download-platform'>
           <img src={assets.play_store} alt="" />
           <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appdow
