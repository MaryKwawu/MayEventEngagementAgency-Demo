import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import "./Login.css";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setAuth] = useContext(AuthContext);
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "Mary" && password === "password") {
      setAuth(true);
      history.push("/protected");
    } else {
      history.push("/");
    }
  };
  return (
    <div className="login-page">
      <div className="login-content">
        <h1>Login Page</h1>
        <p>
          You can't go back and change the begining but you can start where you
          are and change the ending. C.S LEWIS
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <br />
            <input
              className="input-field"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <br />
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <br />
            <input
              className="input-field"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="login-image">
        <img src="eventorg.jpg" alt="Login Page" />
      </div>
    </div>
  );
};
export default LoginPage;
