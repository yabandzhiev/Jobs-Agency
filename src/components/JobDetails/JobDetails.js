import { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import * as jobService from "../../services/jobService";
import { AuthContext } from "../../contexts/AuthContext.js";
import useJobState from "../../hooks/useJobState";

import Button from "react-bootstrap/Button";

import "./JobDetails.css";

const JobDetails = () => {
  const navigate = useNavigate();
  let { user } = useContext(AuthContext);
  const { jobId } = useParams();
  const [job, setJob] = useJobState(jobId);

  const handleDestroy = (e) => {
    e.preventDefault();

    if (user.email) {
      jobService.destroy(jobId, user.accessToken).then(() => {
        navigate("/jobs");
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <section className="clean-block about-us">
        <div className="row jobDetails-row">
          <div className="col-md-12 jobDetails-col-md-12"></div>
        </div>
        <div>
          <div className="block-heading" style={{ paddingTop: "15px" }}>
            <h2 className="text-info">{job.headline}</h2>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-11 col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5"
              style={{ paddingRight: "0px", paddingLeft: "0px" }}
            >
              <div className="card clean-card text-center">
                <img
                  className="card-img-top w-100 d-block"
                  src={job.image}
                  alt="company logo"
                />
                <div className="card-body info">
                  <div className="row">
                    <div className="col" style={{ paddingBottom: "6px" }}>
                      <p className="labels">
                        <strong>Type</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">{job.type}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="labels">
                        <strong>Location</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">{job.location}</p>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "10px" }}>
                    <div className="col">
                      <p className="labels">
                        <strong>Salary</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">${job.salary}</p>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "10px" }}>
                    <div className="col">
                      <p className="labels">
                        <strong>Category</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">{job.category}</p>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "10px" }}>
                    <div className="col">
                      <p className="labels">
                        <strong>Company</strong>
                        <br />
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">{job.company}</p>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "10px" }}>
                    <div className="col">
                      <p className="labels">
                        <strong>Date</strong>
                        <br />
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">{job.date}</p>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "10px" }}>
                    <div className="col">
                      <p className="labels">
                        <strong>Level</strong>
                        <br />
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">{job.level}</p>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "10px" }}>
                    <div className="col">
                      <p className="labels">
                        <strong>Contact</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">{job.contact}</p>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "10px" }}>
                    <div className="col">
                      <p className="labels">
                        <strong>Description</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">{job.description}</p>
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col">
                      <Button variant="danger" onClick={handleDestroy}>
                        Delete
                      </Button>
                    </div>
                    <div className="col">
                      <Link to={`/jobs/${jobId}/edit`}>
                        <Button variant="secondary">Edit</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
