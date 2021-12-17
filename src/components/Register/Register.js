import { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext.js";
import * as authService from "../../services/authService.js";
import "./Register.css";

const Register = () => {
  const { isAuthenticated, login } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const onRegister = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");
    let rePassword = formData.get("rePassword");

    if (password !== rePassword) {
      return alert("Passwords mismatch");
    }

    authService.register(email, password).then(
      (authData) => {
        login(authData);
        navigate("/");
      },
      (err) => {
        alert(err.message);
      }
    );
  };
  return (
    <section className="clean-block clean-form dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Registration</h2>
        </div>
        <form onSubmit={onRegister}>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control item" type="email" id="email" name="email" />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control item"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="rePassword">
              Repeat Password
            </label>
            <input
              className="form-control item"
              type="password"
              id="rePassword"
              name="rePassword"
            />
          </div>

          <div className="button">
            {" "}
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </div>

          <ul className="accountAsking">
            <li>
              <span className="txt1"> Already have an account? </span>

              <Link to="/login">Sign in</Link>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};
export default Register;
