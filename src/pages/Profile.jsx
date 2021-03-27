import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useContext(UserContext);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4000/students");
      const result = await data.json();
      setStudents(result);
    };
    fetchData();
  }, []);
  return (
    <div className="profile-page">
      <div className="profile-content">
        <h1>Profile Page</h1>
        <p>
          We are an Event Engagement Agency, we are available for all events and
          also Cleaning Service Agency ( we provide services for home, hotel,
          offices, banks, institution), we are just a phone call away.
        </p>
        <button onClick={() => setUser("Profile")}>Change User</button>
      </div>
      <div className="profile-image">
        <img src="profile.jpg" alt="profile-Page" />
      </div>
    </div>
  );
};

export default Profile;
