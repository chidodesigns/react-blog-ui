import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-linkedin"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-github-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/blog" className="link">
              BLOG
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            {user && (
              <Link to="/logout" className="link">
                LOGOUT
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://avatars.githubusercontent.com/u/22502303?v=4"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className=" topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
