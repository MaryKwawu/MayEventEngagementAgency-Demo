import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Contact.css";
const ContactPage = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1>Contact Page</h1>
        <p>
          GET IN TOUCH. Want to get in touch? We will love to hear from you.
          Here is how to reach us...
        </p>
        <button onClick={() => setUser("Contact")}>Change User</button>
      </div>
      <div className="contact-image">
        <img src="contact.jpg" alt="Contact Page" />
      </div>
    </div>
  );
};

export default ContactPage;
