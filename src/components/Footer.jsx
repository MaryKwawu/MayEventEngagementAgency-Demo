import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="footer">
      <ul id="footer">
        <li className="footeritem">
          <NavLink to="/service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/protected">Protected</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
