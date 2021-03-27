import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import "./Protected.css";
const ProtectedPage = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="protected-page">
      <div className="protected-content">
        <h1>Protected Page</h1>
        <p>
          All our customer are protected legally and have nothing to be worried
          about. At May Engagement Agency we got you covered.
        </p>
        {/* <button onClick={() => setUser("ProtectedPage")}>Change User</button> */}
        <button>
          <NavLink className="changeuser" to="/">
            Changeuser
          </NavLink>
        </button>
      </div>
      <div className="protected-image">
        <img src="protected.jpg" alt="Protected Page" />
      </div>
    </div>
  );
};
export default ProtectedPage;
