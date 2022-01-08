import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form  className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="Enter Your Email..."/>
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter Your password..."/>
                <button className="loginButton">Login</button>
                <button className="loginRegisterButton">
                    <Link to="/register" className="link">Register</Link>
                </button>
            </form>
        </div>
    )
}
