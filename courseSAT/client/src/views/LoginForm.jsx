import React from 'react'
import HeaderForm from '../componetnts/HeaderForm'
import Login from '../componetnts/Login'
import Registration from '../componetnts/Registration'

const LoginForm = (props) => {
  return (
    <div>
      <HeaderForm/>
    <div className='form'>
        <Login updateLoggedInUser={props.updateLoggedInUser}/>
        <Registration updateLoggedInUser={props.updateLoggedInUser}/>
    </div>
    </div>
  )
}

export default LoginForm