import JobItem from "./JobItem/JobItem.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as jobService from "../../services/jobService.js";

const Jobs = () => {
  const [jobsInitial, setJobsInitial] = useState([]);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    jobService.getAll().then(
      (res) => {
        setJobs(res);

        setJobsInitial(res);
      },
      (err) => {
        alert(err.message);
      }
    );
  }, []);

  return (
    <section className="clean-block clean-catalog dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Job Listings</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna,
            dignissim nec auctor in, mattis vitae leo.
          </p>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-3">
              <div className="d-none d-md-block">
                <div className="filters">
                  <Link to="/jobs/create" className="job-details-button">
                    <button className="btn btn-success " type="button">
                      Create Job
                    </button>
                  </Link>

                  <div className="filter-item">
                    <br />
                    <h3>Type</h3>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="formCheck-1"
                      />
                      <label className="form-check-label" htmlFor="formCheck-1">
                        Phones
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="formCheck-2"
                      />
                      <label className="form-check-label" htmlFor="formCheck-2">
                        Laptops
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="formCheck-3"
                      />
                      <label className="form-check-label" htmlFor="formCheck-3">
                        PC
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="formCheck-4"
                      />
                      <label className="form-check-label" htmlFor="formCheck-4">
                        Tablets
                      </label>
                    </div>
                  </div>
                  <div className="filter-item">
                    <h3>Salary</h3>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="formCheck-5"
                      />
                      <label className="form-check-label" htmlFor="formCheck-5">
                        Samsung
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="formCheck-6"
                      />
                      <label className="form-check-label" htmlFor="formCheck-6">
                        Apple
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="formCheck-7"
                      />
                      <label className="form-check-label" htmlFor="formCheck-7">
                        HTC
                      </label>
                    </div>
                  </div>
                  <div className="filter-item">
                    <h3>Level</h3>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="formCheck-8"
                      />
                      <label className="form-check-label" htmlFor="formCheck-8">
                        Android
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="formCheck-9"
                      />
                      <label className="form-check-label" htmlFor="formCheck-9">
                        iOS
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-md-none">
                <a
                  className="btn btn-link d-md-none filter-collapse"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="filters"
                  href="#filters"
                  role="button"
                >
                  Filters<i className="icon-arrow-down filter-caret"></i>
                </a>
                <div className="collapse" id="filters">
                  <div className="filters">
                    <div className="filter-item">
                      <h3>Type</h3>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-1"
                        />
                        <label className="form-check-label" htmlFor="formCheck-1">
                          Phones
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-2"
                        />
                        <label className="form-check-label" htmlFor="formCheck-2">
                          Laptops
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-3"
                        />
                        <label className="form-check-label" htmlFor="formCheck-3">
                          PC
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-4"
                        />
                        <label className="form-check-label" htmlFor="formCheck-4">
                          Tablets
                        </label>
                      </div>
                    </div>
                    <div className="filter-item">
                      <h3>Salary</h3>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-5"
                        />
                        <label className="form-check-label" htmlFor="formCheck-5">
                          Samsung
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-6"
                        />
                        <label className="form-check-label" htmlFor="formCheck-6">
                          Apple
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-7"
                        />
                        <label className="form-check-label" htmlFor="formCheck-7">
                          HTC
                        </label>
                      </div>
                    </div>
                    <div className="filter-item">
                      <h3>Level</h3>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-8"
                        />
                        <label className="form-check-label" htmlFor="formCheck-8">
                          Android
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-9"
                        />
                        <label className="form-check-label" htmlFor="formCheck-9">
                          iOS
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="products">
                <div className="row g-0">
                  {" "}
                  {jobs.length > 0 ? (
                    jobs.map((x) => {
                      return <JobItem job={x} key={x._id} />;
                    })
                  ) : (
                    <span>
                      <strong>No Jobs match your search criteria!</strong>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
