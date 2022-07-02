import React, {useEffect, useState} from 'react';
import CourseDetails from '../componetnts/CourseDetails';
import DashNav from '../componetnts/DashNav';
import { useParams } from 'react-router-dom';

const View = (props) => {

  return (
    <div >
      <DashNav updateLoggedInUser={props.updateLoggedInUser} loggedInUser={props.loggedInUser}/>
      <CourseDetails loggedInUser={props.loggedInUser}/>
    </div>
  )
}

export default View