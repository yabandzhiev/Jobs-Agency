import { Link } from "react-router-dom";
import "./FeaturedJobsItem.css";

const FeaturedJobsItem = ({ job }) => {
  return (
    <div className="col-lg-4">
      <div className="card mb-4 box-shadow rounded-0">
        <img
          className="card-img-top w-100 d-block rounded-0 featured-job-image"
          src={job.image}
          alt="company logo"
        />
        <div className="card-body">
          Looking for
          <h4 className="card-title">
            <strong>{job.headline}</strong>
          </h4>
          <span title="Published on">
            <p>
              Published on{" "}
              <strong>
                <i>{job.date}</i>
              </strong>
            </p>
          </span>
          <span title="Location">
            <p>
              Location <strong>{job.location}</strong>
            </p>
          </span>
          <span title="Type">
            <p>
              Type <strong>{job.type}</strong>
            </p>
          </span>
          <h5>
            <p>
              Salary <strong>${job.salary} </strong>
            </p>
          </h5>
          <p className="card-text">
            <strong>{job.category}</strong> Job for
            <br />
            <strong>{job.company}</strong>
          </p>
          <Link to={`/jobs/${job._id}`} className="job-details-button">
            <button className="btn btn-primary " type="button">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobsItem;
