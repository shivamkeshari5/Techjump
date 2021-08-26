import React from 'react';
import './signup.css';


const Signup = () => {
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
                      <h2 >Create Account</h2>
                      
                      <div className="div">
                      <input type="email" name="email" placeholder="Your email" className="input" /><br/><br/></div>
                      <div>
                      <input type="password" name="password" placeholder="password" className="input" /><br/>
                      
                      <br/></div>
                      <div>
                      <input type="password" name="password" placeholder="Confirm password" className="input" /><br/>
                      <br/></div>
                      <button className="btn"> Sign up </button>
                     
                      <div className="h4btn"><h4>Back to</h4><button className="btn1">Sign In</button></div>
                       
                  </div>
                </form>
                
                     </div>
        </div></>
    );
};

export default Signup;