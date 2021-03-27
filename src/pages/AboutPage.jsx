import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import "./About.css";

const AboutPage = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Page</h1>
        <p>
          l BEHIND EVERY EVENT IS A GREAT STORY. May event agency is a creative
          engagement agency, where we create and deliver live experiences,
          strategic communications, videos and interactive content.
        </p>
        {/* <button onClick={() => setUser("AboutPage")}>changeuser</button> */}
        <button>
          <NavLink className="changeuser" to="/contact">
            Changeuser
          </NavLink>
        </button>
      </div>
      <div className="about-image">
        <img src="decor.jpg" alt="About Page" />
      </div>
    </div>
  );
};

export default AboutPage;
