import React from 'react'

function Login_page() {
  return (
    <div className="login_page">
      <div className='login_item'>
      <h3 className='login-head'>Connect With Peers</h3>
      <img className="login_img" src="./img/clipart3.jpeg" />
      </div>
      <div className='login_item'>
        <form className='login_form'>
        <h3>Log In</h3>
          <input type="email"  placeholder='  Enter Your Email' name="email"/><br/>
          <input type='password' placeholder='  Enter Your Password' name='password' />
         <button type='button' className='login_button'>Log in</button>
         <hr/>
         <div  className='small_button'>
          <button type='button'>Google</button>
          <button type='button'>Instagram</button>
         </div>
         <button type='button' className='login_button'>New user? Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Login_page