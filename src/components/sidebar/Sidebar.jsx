import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          className="sidebarImg"
          src="https://avatars.githubusercontent.com/u/22502303?v=4"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, rerum
          non nobis dolorem natus dolore qui .
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Coding</li>
          <li className="sidebarListItem">Portfolio</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Me</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-linkedin"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-github-square"></i>
        </div>
      </div>
    </div>
  );
}
