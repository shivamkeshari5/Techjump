import React from 'react';
import './login.css';


const Login = () => {
    return (
       <>
       <img className="wave" src="img/wave.png" />
        <div className="container">
        <div className="img">
			<img src="img/bg.svg" />
	           	</div>

            <div className="login-content" >
                <form>
                  <div className="form_container">
                      <h2 >Welcome Back</h2>
                      
                      <div className="div">
                      <input type="email" name="email" placeholder="email" className="input" /><br/><br/></div>
                      <div>
                      <input type="password" name="password" placeholder="password" className="input" /><br/>
                      <a href="#">Forgot Password</a>
                      <br/></div>
                      <button className="btn"> Sign IN </button>
                      <h3 style={{alignContent:"center"}}>or</h3>
                      <button className="btn">Sign in with Google</button>
                      <div className="h4btn"><h4>Create an Account</h4><button className="btn1">Sign Up</button></div>
                       
                  </div>
                </form>
                
                     </div>
        </div></>
    );
};

export default Login;