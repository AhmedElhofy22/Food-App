import React , {Fragment, useState} from 'react'
import { useNavigate } from "react-router-dom";
import './Welcome.css'

const Welcome = (props) => {
  const navigate=useNavigate()
  const goToLoginPage=()=>{
    navigate('/login')
  }
  return (
    <div className='welcome'>
      
        <Fragment>
        <div className='welcome__page'/>
        <div className='welcome__content'>
        <h1>Welcome to our Cafe and Restaurant.</h1>
        <h2>Are you ready for this experience?</h2>
        <h3>Great food with fresh drinks waiting for you.</h3>
      </div>
      </Fragment>  
      <div className='welcome__button'>
        <button type='button' onClick={goToLoginPage} className='welcome__getStarted'>GET STARTED</button>
      </div>
      
      
      
    </div>
  )
}

export default Welcome
