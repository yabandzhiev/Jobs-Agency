import { useContext } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";

import * as authService from "../../services/authService.js";
import { AuthContext } from "../../contexts/AuthContext.js";

const Login = () => {
  const { isAuthenticated, login } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const onLogin = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");

    authService.login(email, password).then(
      (authData) => {
        login(authData);
        navigate("/");
      },
      (err) => {
        alert(err);
      }
    );
  };
  return (
    <section className="clean-block clean-form dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Log In</h2>
        </div>
        <form onSubmit={onLogin}>
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
              className="form-control"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="btn btn-primary">Log In</button>
          </div>{" "}
          <ul className="accountAsking">
            <li>
              <span className="txt1"> Don’t have an account? </span>

              <Link to="/register">Sign up</Link>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};
export default Login;
