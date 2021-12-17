import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="clean-block about-us">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">About Us</h2>
          <p>
            Meet the team who managed to build and keep on maintaining the site for you!
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-lg-4">
            <div className="card text-center clean-card">
              <img
                className="card-img-top w-100 d-block"
                src="assets/img/avatars/avatar1.jpg"
                alt="avatar1"
              />
              <div className="card-body info">
                <h4 className="card-title">John Smith</h4>
                <p className="card-text">Front-End Developer</p>
                <div className="icons">
                  <Link to="#">
                    <i className="icon-social-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="icon-social-instagram"></i>
                  </Link>

                  <Link to="#">
                    <i className="icon-social-twitter"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card text-center clean-card">
              <img
                className="card-img-top w-100 d-block"
                src="assets/img/avatars/avatar2.jpg"
                alt="avatar2"
              />
              <div className="card-body info">
                <h4 className="card-title">Robert Downturn</h4>
                <p className="card-text">Back-End Developer</p>
                <div className="icons">
                  <Link to="#">
                    <i className="icon-social-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="icon-social-instagram"></i>
                  </Link>

                  <Link to="#">
                    <i className="icon-social-twitter"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card text-center clean-card">
              <img
                className="card-img-top w-100 d-block"
                src="assets/img/avatars/avatar3.jpg"
                alt="avatar3"
              />
              <div className="card-body info">
                <h4 className="card-title">Ally Sanders</h4>
                <p className="card-text">Team Lead</p>
                <div className="icons">
                  <Link to="#">
                    <i className="icon-social-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="icon-social-instagram"></i>
                  </Link>

                  <Link to="#">
                    <i className="icon-social-twitter"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
