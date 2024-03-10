import React from 'react'
import "../Css Files/ContactUs.css"
import Footer from './Footer'
import Img from '../images/contactUs.png'
import { Element } from 'react-scroll'

export default function ContactUs() {
  return (
    <div className='contactUs'>
            <Element name="contactUs">
      
      <h1>Contact Us</h1>
      <div className='contactMain'>
        <div className='contactDetails'>
          <h2>Email:</h2>
          <h4>CodeBug@Business.com</h4>
          <br/>
          <h2>Contact:</h2>
          <h4>+91 8596746352</h4>
          <br/>
          <h2>Address:</h2>
          <h4>
            Mare Tranquillitatis,
            Apollo 11 Avenue,
            Tranquility Region,
            Luna City,
            Lunar District,
            Lunar State,
            Moon
          </h4>
        </div>
        <div className='contactPic'>
          <img src={Img} />
        </div>
      </div>

      {/* <Footer /> */}
      </Element>
    </div>
  )
}
