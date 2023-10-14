import React from "react";
import './Login.css'

export default function Login() {
    return (
        <>
            
          <div className="homebody">      
                {/* LOGIN SECTION  */}

            <div className="login">
                    <h2 className="homeh2">Login</h2><br/>
                    <label id="label">Username/Email</label><br/>
                    <input className="input" type="text" placeholder="username"
                    /><br/>
                    <label id="label">Password</label><br/>
                    <input className="input" type="password" placeholder="password"></input><br/>
                    <button type="submit" id="submit">Submit</button>

                    {/* forget */}
                    
                    <input id="forget" type="checkbox" />
                    <label htmlFor="" >Forget password?</label>


            </div>
                {/* parasection */}

            <div className="parasection">
                <h2 className="homeh2">Join us</h2>
                <p id="paragraph"></p>    
                
            </div>   

          </div>   
        
        </>
        
    )

}