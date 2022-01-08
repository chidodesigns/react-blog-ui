import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form  className="registerForm">
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter Your Username..."/>
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Enter Your Email..."/>
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter Your password..."/>
                <button className="registerButton">Register</button>
                <button className="registerLoginButton">
                <Link to="/login" className="link">Login</Link>
                </button>
            </form>
        </div>
    )
}
