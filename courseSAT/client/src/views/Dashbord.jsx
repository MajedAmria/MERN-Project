import React from 'react'
import DashNav from '../componetnts/DashNav'
import ListCourse from '../componetnts/ListCourse'



const Dashbord = () => {
  return (
    <div>
    <DashNav/>
    <h1 style={{color:"white"}}>Welcome User Name</h1>
    <ListCourse/>
    <br/>
    </div>
  )
}

export default Dashbord