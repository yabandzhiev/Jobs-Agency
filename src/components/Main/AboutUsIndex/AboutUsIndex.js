import { Link } from "react-router-dom";

import "./AboutUsIndex.css";

const AboutUsIndex = () => {
  return (
    <section className="clean-block clean-info">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna,
            dignissim nec auctor in, mattis vitae leo.
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              className="img-thumbnail"
              src="assets/img/about-us-index.jpg"
              alt="mountain scene"
            />
          </div>
          <div className="col-md-6">
            <h3>Lorem impsum dolor sit amet</h3>
            <div className="getting-started-info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>
            <button
              className="btn btn-outline-primary btn-lg"
              type="button"
              id="about-us-button-for-jobs"
            >
              <Link to="/jobs">View Jobs</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsIndex;
