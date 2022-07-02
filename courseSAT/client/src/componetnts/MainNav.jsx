import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar,NavbarToggler,NavbarBrand,NavbarText,DropdownItem,DropdownMenu,DropdownToggle,Collapse,Nav,NavItem,NavLink,UncontrolledDropdown} from 'reactstrap'
const MainNav = () => {
  return (
    <div>
        <Navbar color="dark" dark expand="md" light>
        <Link to="/" className='link'>COURSE<span className='spa'>@</span></Link>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar className='nav'>
              <Nav className="me-auto" navbar>
              <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Register</NavLink>
                </NavItem>
              </Nav>
              
            </Collapse>
        </Navbar>
      </div>
  )
}

export default MainNav