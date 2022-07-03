import React from 'react'
import  Avatar  from '@mui/material/Avatar'
import { Navbar,NavbarToggler,NavbarBrand,Collapse,Nav,NavItem,NavLink} from 'reactstrap'
import { deepOrange } from '@mui/material/colors';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
// import MainNav from './MainNav';

const DashNav = (props) => {

  const history=useHistory();
  const onLogOut=()=>{
    axios.get('/api/logout')
    .then(props.updateLoggedInUser({}))
    .then(history.push('/'))
    .catch(err=>console.error(err));
  }
  return (
    <div>
        <Navbar color="dark" dark expand="md" light>
          
            <NavbarToggler onClick={function noRefCheck(){}} />
            <NavbarBrand href="/">Home Page</NavbarBrand>
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/about">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <Link to="/new">New Course</Link>
                </NavItem>
                <NavItem>
                  <NavLink onClick={onLogOut}>Logout</NavLink>
                </NavItem>
              </Nav>
              <h3 style={{color:"white"}}>{props.loggedInUser.firstName}</h3>
              <Avatar sx={{ bgcolor: deepOrange[500] }} >{props.loggedInUser.firstName[0]}</Avatar>
            </Collapse>
        </Navbar>
    </div>
  )
}

export default DashNav