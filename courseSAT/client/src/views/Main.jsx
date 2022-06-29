import React from 'react'
import { Link } from 'react-router-dom'
import ListCourse from '../componetnts/ListCourse'
import MainNav from '../componetnts/MainNav'


const Main = () => {
  return (
    <div>
        <MainNav/>
        <h1 style={{color:"white"}}> Our Courses</h1>
        <ListCourse/>
    </div>
  )
}

export default Main