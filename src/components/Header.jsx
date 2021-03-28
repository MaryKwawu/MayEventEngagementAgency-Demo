import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav id="nav-bar">
      <ul className="navlink">
        <div className="logo">May Events Engagement Agency</div>

        <li className="nav">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav">
          <NavLink to="/contact">Contact </NavLink>
        </li>
        <li className="nav">
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
