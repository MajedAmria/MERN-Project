import React from 'react'
import CourseForm from '../componetnts/CourseForm'
import DashNav from '../componetnts/DashNav'

const NewCourse = (props) => {
  return (
    <div>
      <h1>new course page</h1>
        <DashNav  loggedInUser={props.loggedInUser}/>
        <CourseForm loggedInUser={props.loggedInUser}/>
    </div>
  )
}

export default NewCourse