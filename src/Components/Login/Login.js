import React , {Fragment} from 'react'


const Login = (props) => {
  
  return (
    <Fragment>
      <form >
        <h1>Sign In</h1>
        <input placeholder='Email' type='email'/>
        <input placeholder='Password' type='password'/>
        <button type='submit'>Sign In</button>
      </form>
    </Fragment>
  )
}

export default Login
