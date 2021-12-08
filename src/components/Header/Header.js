import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext.js";

const Header = () => {
  const { user } = useContext(AuthContext);

  const guestNavigation = (
    <ul className="navbar-nav ms-auto">
      {" "}
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>
      </li>
    </ul>
  );
  const userNavigation = (
    <ul className="navbar-nav ms-auto">
      {" "}
      <li className="nav-item">
        <Link className="nav-link" to="#">
          Welcome, {user.email}
        </Link>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout">
          Logout
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
      <div className="container">
        <NavLink className="navbar-brand logo" to="/">
          Jobs Agency
        </NavLink>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="service-page.html">
                Services
              </NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs">
                Blog
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="">
                Blog Post
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
            {user.email ? userNavigation : guestNavigation}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
