import React from 'react'
import { Navbar,NavbarToggler,NavbarBrand,NavbarText,DropdownItem,DropdownMenu,DropdownToggle,Collapse,Nav,NavItem,NavLink,UncontrolledDropdown} from 'reactstrap'
const HeaderForm = () => {
  return (
    <div>
<Navbar 
     color="dark"
     dark
     expand="md"
     light
  >
    <NavbarBrand href="/">
      Home Page
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/about">
            About Us
          </NavLink>
        </NavItem>
        
      </Nav>
      
    </Collapse>
  </Navbar>
    </div>
  )
}

export default HeaderForm