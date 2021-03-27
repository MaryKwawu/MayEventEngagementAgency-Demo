import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./service.css";
const ServicePage = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="service-page">
      <div className="service-content">
        <h1>Service Page</h1>
        <p>
          Our services are trush worthy and reliable. No delays and we are at
          your call.
        </p>
        <button onClick={() => setUser("Service")}>Changeuser</button>
      </div>
      <div className="service-image">
        <img src="cleaning.jpg" alt="Service Page" />
      </div>
    </div>
  );
};

export default ServicePage;
