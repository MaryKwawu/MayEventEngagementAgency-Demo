import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import ProfileDetail from "./pages/ProfileDetail";
import ProtectedPage from "./pages/ProtectedPage";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import AuthContextProvider from "./context/AuthContext";
import UserContextProvider from "./context/UserContext";
import Footer from "../src/components/Footer";
// let isLoggedIn = true;

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/service" component={ServicePage} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/profile/:userId" component={ProfileDetail} />
            <Route path="/login/" component={LoginPage} />
            <ProtectedRoute path="/protected" component={ProtectedPage} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
