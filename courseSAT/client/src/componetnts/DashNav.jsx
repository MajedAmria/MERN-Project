import React from 'react'
import  Avatar  from '@mui/material/Avatar'
import { Navbar,NavbarToggler,NavbarBrand,Collapse,Nav,NavItem,NavLink,UncontrolledDropdown} from 'reactstrap'
import { deepOrange } from '@mui/material/colors'
const DashNav = () => {
  return (
    <div>
        <Navbar color="dark" dark expand="md" light>
          <NavbarBrand href="/">Home Page</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/about">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/new">New Course</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/logout">Logout</NavLink>
                </NavItem>
              </Nav>
              <h3 style={{color:"white"}}> Name of Loged in User</h3>
              <Avatar sx={{ bgcolor: deepOrange[500] }} >U</Avatar>
            </Collapse>
        </Navbar>
    </div>
  )
}

export default DashNav