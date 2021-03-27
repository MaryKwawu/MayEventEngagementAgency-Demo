import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import "./service.css";
const ServicePage = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="service-page">
      <div className="service-content">
        <h1>Service Page</h1>
        <p>
          Our services are trust worthy and reliable. No delays and we are at
          your call.
        </p>
        {/* <button onClick={() => setUser("Service")}>Changeuser</button> */}
        <button>
          <NavLink className="changeuser" to="/protected">
            Changeuser
          </NavLink>
        </button>
      </div>
      <div className="service-image">
        <img src="cleaning.jpg" alt="Service Page" />
      </div>
    </div>
  );
};

export default ServicePage;
