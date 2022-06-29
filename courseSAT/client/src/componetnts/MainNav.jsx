import React from 'react'
import { Navbar,NavbarToggler,NavbarBrand,NavbarText,DropdownItem,DropdownMenu,DropdownToggle,Collapse,Nav,NavItem,NavLink,UncontrolledDropdown} from 'reactstrap'
const MainNav = () => {
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
       <NavItem>
         <NavLink href="/login">
          Login
         </NavLink>
       </NavItem>
       <NavItem>
         <NavLink href="/login">
           Register
         </NavLink>
       </NavItem>
       
     </Nav>
     
   </Collapse>
 </Navbar></div>
  )
}

export default MainNav