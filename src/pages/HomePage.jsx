import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Home.css";
const HomePage = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Home Page</h1>
        <p>
          Where Events are born and nutured. Need an event organizing agency
          look no further, May Event Engagement Agency is the best place to
          book.
        </p>
        <button onClick={() => setUser("Home")}>change user</button>
      </div>
      <div className="home-image">
        <img src="happy.jpg" alt="Home Page" />
      </div>
    </div>
  );
};

export default HomePage;
