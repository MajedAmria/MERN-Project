import React from 'react'
import { Link } from 'react-router-dom'
import ListCourse from '../componetnts/ListCourse'
import MainNav from '../componetnts/MainNav'


const Main = (props) => {
  return (
    <div>
        <MainNav/>
        <ListCourse loggedInUser={props.loggedInUser}/>
    </div>
  )
}

export default Main