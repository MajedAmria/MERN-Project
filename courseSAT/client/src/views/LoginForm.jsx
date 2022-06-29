import React from 'react'
import HeaderForm from '../componetnts/HeaderForm'
import Login from '../componetnts/Login'
import Registration from '../componetnts/Registration'

const LoginForm = () => {
  return (
    <div>
         <HeaderForm/>
    <div className='form'>
       
        <Login/>
        <Registration/>
    </div>
    </div>
  )
}

export default LoginForm