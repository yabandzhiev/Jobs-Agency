import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-3" style={{ color: "white" }}>
            <h5>Headquarter</h5>
            <address>
              <p>
                212 Barrington Court <br />
                New York, ABC 10001
              </p>
            </address>
          </div>
          <div className="col-sm-3">
            <h5>Get started</h5>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/jobs">Jobs</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>About us</h5>
            <ul>
              {" "}
              <li>
                <NavLink to="/contact">Contact us</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-sm-3" style={{ color: "white" }}>
            <h5>Contact Info</h5>
            <address>
              <p>+1 333 4040 5566</p>
              <p>
                <a href="mailto:contact@jobsagency.com">contact@jobs_agency.com</a>
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Jobs Agency© 2021</p>
      </div>
    </footer>
  );
};
export default Footer;
