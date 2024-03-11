import "../Css Files/ReactNavBar.css"
import React from 'react'
import logo from "../images/logo6.png"
import { useNavigate } from 'react-router-dom'
import User from './User'
import Theme from '../subComponents/Theme'
import { Link } from 'react-scroll'
import { NavDropdown, Nav } from 'react-bootstrap'

export default function ReactNavBar({ onLoginClick, onSignupClick }) {
  const nav = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div className='NavBarr'>
      {/* <div>

        <img src={logo} alt='logo' />
      </div> */}
      <div className=''>

        <h1>CodeBud</h1>
      </div>
      <Link to="screen1" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}} >Home</Link>

      <Link to="aboutUs" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}} >About Us</Link>
      <Link to="contactUs" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}} >Contact Us</Link>
      <Link to="screen3" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}} >Why learn here?</Link>
      {/* <Link to="/help" >Help</Link> */}
{/* 
      <div className='theme'>
        <Theme />
      </div> */}
      <div className='userDiv'>
        {/* <User/> */}
        <NavDropdown
          id="nav-dropdown-dark-example"
          title=""
          menuVariant="light"
        > 
          {!user ? <>
            <div >
              <NavDropdown.Item onClick={() => {
                onLoginClick();
                // nav('/login')
              }}>LogIn
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                // nav('/signup')
                onSignupClick()
              }}>SignUp
              </NavDropdown.Item>
            </div>
          </> :
            <>
              <div >
                <NavDropdown.Item onClick={()=>{
                  nav("/profile")
                }} > Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => {
                  localStorage.clear()
                  nav("/")
                }} >Log Out
                </NavDropdown.Item>
              </div>
            </>

          }
        </NavDropdown>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
      </div>


    </div>
  )
}