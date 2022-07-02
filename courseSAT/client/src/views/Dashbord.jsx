import React from 'react';
import DashNav from '../componetnts/DashNav';
import ListCourse from '../componetnts/ListCourse';

const Dashbord = (props) => {



  return (
    <div>
      <DashNav updateLoggedInUser={props.updateLoggedInUser} loggedInUser={props.loggedInUser}/>
      <ListCourse loggedInUser={props.loggedInUser}/>
    <br/>
    </div>
  )
}

export default Dashbord