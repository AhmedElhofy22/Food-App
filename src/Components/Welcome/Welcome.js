import React , {Fragment, useState} from 'react'
import Login from '../Login/Login'

const Welcome = (props) => {
  const[signIn,setSignIn]=useState(false)
  const signInHandler = ()=> setSignIn(true)
  return (
    <Fragment>
      <div>
         <button onClick={signInHandler}>Sign In</button>
      </div>
      {signIn ? (<Login/>) : (
        <Fragment>
        <div>
        <h1>Welcome to our Cafe and Restaurant.</h1>
        <h2>Are you ready for this experience?</h2>
        <h3>Great food with fresh drinks waiting for you.</h3>
      </div>
      <div>
        <img src='https://media.architecturaldigest.com/photos/5e5e78b26fb065000842ba95/master/w_1600%2Cc_limit/Main-Dining-Room-2.jpg'
        alt='Cafe and Restaurant'/>
      </div>
      </Fragment>
      )}
      
      
    </Fragment>
  )
}

export default Welcome
