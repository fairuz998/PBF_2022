import React, {Component} from "react";
import './Login.css';

function Login() {
    return(
    <div>
        <h2>Form Login</h2>
        <form>
            <div className="imgcontainer">
                <h1><b>Tugas Pertemuan Ketiga</b></h1>
            </div>
            <div className="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                <button type="submit">Login</button>
                <input type="checkbox" defaultChecked/> Remember me
            </div>
            <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
    </div>
    );
}
export default Login;