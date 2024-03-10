import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import Theme from '../subComponents/Theme';
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div >
      <NavDropdown
        id="nav-dropdown-dark-example"
        title=""
        menuVariant="light"
      ><div >
        <NavDropdown.Item><Nav.Link href='/login' >LogIn</Nav.Link>
        </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item><Nav.Link href='/signup' >SignUp</Nav.Link>
        </NavDropdown.Item>
          {/* <NavDropdown.Item href="#action/3.3">FeedBack</NavDropdown.Item> */}
          {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </div>
      </NavDropdown>
    </div>
  )
}
