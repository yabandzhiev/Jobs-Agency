import { Link } from "react-router-dom";

import "./AboutUsIndex.css";

const AboutUsIndex = () => {
  return (
    <section className="clean-block clean-info">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">About Us</h2>
          <p>
            If you’re looking for a job, we can help you get in the door at some
            incredible companies. No matter where you are, we can help you get where you
            want to go in your career.
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
            <h3>The place where recruiters and candidates meet.</h3>
            <div className="getting-started-info">
              <p>
                We are the agency whose job is to find you the most suitable Job! Take a
                look at some of them.
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
