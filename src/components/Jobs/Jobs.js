import JobItem from "./JobItem/JobItem.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as jobService from "../../services/jobService.js";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const Jobs = () => {
  const [jobsInitial, setJobsInitial] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const [jobs, setJobs] = useState([]);

  const handleOptionChange = (e) => {
    switch (e.target.name) {
      case "All":
        setJobs(jobsInitial);
        setSelectedFilter("All");

        break;
      case "Contract":
        setJobs(jobsInitial.filter((x) => x.type === "Contract"));
        setSelectedFilter("Contract");
        break;
      case "Fulltime":
        setJobs(jobsInitial.filter((x) => x.type === "Fulltime"));
        setSelectedFilter("Fulltime");

        break;
      case "Internship":
        setJobs(jobsInitial.filter((x) => x.type === "Internship"));
        setSelectedFilter("Internship");

        break;

      case "Business and Finance":
        setJobs(jobsInitial.filter((x) => x.category === "Business and Finance"));
        setSelectedFilter("Business and Finance");

        break;
      case "Health Science":
        setJobs(jobsInitial.filter((x) => x.category === "Health Science"));
        setSelectedFilter("Health Science");

        break;
      case "Information Technology":
        setJobs(jobsInitial.filter((x) => x.category === "Information Technology"));
        setSelectedFilter("Information Technology");

        break;

      case "Entry Level":
        setJobs(jobsInitial.filter((x) => x.level === "Entry Level"));
        setSelectedFilter("Entry Level");

        break;
      case "Intermediate Level":
        setJobs(jobsInitial.filter((x) => x.level === "Intermediate Level"));
        setSelectedFilter("Intermediate Level");

        break;
      case "Senior Level":
        setJobs(jobsInitial.filter((x) => x.level === "Senior Level"));
        setSelectedFilter("Senior Level");

        break;

      default:
        break;
    }
  };

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
          <p>Here you can find all of the latest job listings available at the moment.</p>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-3">
              <div className="d-none d-md-block">
                <div className="filters" style={{ textAlign: "center" }}>
                  <Link to="/jobs/create" className="job-details-button">
                    <button className="btn btn-success " type="button">
                      Create Job
                    </button>
                  </Link>

                  <div className="filter-item">
                    <br />

                    <Dropdown className="d-inline mx-2">
                      <Dropdown.Toggle id="dropdown-autoclose-true">
                        Filters
                      </Dropdown.Toggle>

                      <Dropdown.Menu
                        className="super-colors"
                        style={{ textAlign: "center" }}
                      >
                        <Dropdown.Item onClick={handleOptionChange} name="All">
                          All
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <strong>Type</strong>
                        <br />
                        <Dropdown.Item onClick={handleOptionChange} name="Contract">
                          Contract
                        </Dropdown.Item>
                        <br />
                        <Dropdown.Item onClick={handleOptionChange} name="Fulltime">
                          Fulltime
                        </Dropdown.Item>
                        <br />
                        <Dropdown.Item onClick={handleOptionChange} name="Internship">
                          Internship
                        </Dropdown.Item>

                        <Dropdown.Divider />

                        <strong>Category</strong>
                        <br />

                        <Dropdown.Item
                          onClick={handleOptionChange}
                          name="Business and Finance"
                        >
                          Business and Finance
                        </Dropdown.Item>
                        <br />

                        <Dropdown.Item onClick={handleOptionChange} name="Health Science">
                          Health Science
                        </Dropdown.Item>
                        <br />

                        <Dropdown.Item
                          onClick={handleOptionChange}
                          name="Information Technology"
                        >
                          Information Technology
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        <strong>Career levels</strong>
                        <br />

                        <Dropdown.Item onClick={handleOptionChange} name="Entry Level">
                          Entry Level
                        </Dropdown.Item>
                        <br />

                        <Dropdown.Item
                          onClick={handleOptionChange}
                          name="Intermediate Level"
                        >
                          Intermediate Level
                        </Dropdown.Item>
                        <br />

                        <Dropdown.Item onClick={handleOptionChange} name="Senior Level">
                          Senior Level
                        </Dropdown.Item>
                        <br />
                      </Dropdown.Menu>
                    </Dropdown>
                    <br />
                    <br />
                    <p>{selectedFilter}</p>
                  </div>
                </div>
              </div>
              <div className="d-md-none">
                {" "}
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  {" "}
                  <Link to="/jobs/create" className="job-details-button">
                    <button className="btn btn-success " type="button">
                      Create Job
                    </button>
                  </Link>
                </div>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                      Filters
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      className="super-colors"
                      style={{ textAlign: "center" }}
                    >
                      <Dropdown.Item onClick={handleOptionChange} name="All">
                        All
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <strong>Type</strong>
                      <br />
                      <Dropdown.Item onClick={handleOptionChange} name="Contract">
                        Contract
                      </Dropdown.Item>
                      <br />
                      <Dropdown.Item onClick={handleOptionChange} name="Fulltime">
                        Fulltime
                      </Dropdown.Item>
                      <br />
                      <Dropdown.Item onClick={handleOptionChange} name="Internship">
                        Internship
                      </Dropdown.Item>

                      <Dropdown.Divider />

                      <strong>Category</strong>
                      <br />

                      <Dropdown.Item
                        onClick={handleOptionChange}
                        name="Business and Finance"
                      >
                        Business and Finance
                      </Dropdown.Item>
                      <br />

                      <Dropdown.Item onClick={handleOptionChange} name="Health Science">
                        Health Science
                      </Dropdown.Item>
                      <br />

                      <Dropdown.Item
                        onClick={handleOptionChange}
                        name="Information Technology"
                      >
                        Information Technology
                      </Dropdown.Item>

                      <Dropdown.Divider />
                      <strong>Career levels</strong>
                      <br />

                      <Dropdown.Item onClick={handleOptionChange} name="Entry Level">
                        Entry Level
                      </Dropdown.Item>
                      <br />

                      <Dropdown.Item
                        onClick={handleOptionChange}
                        name="Intermediate Level"
                      >
                        Intermediate Level
                      </Dropdown.Item>
                      <br />

                      <Dropdown.Item onClick={handleOptionChange} name="Senior Level">
                        Senior Level
                      </Dropdown.Item>
                      <br />
                    </Dropdown.Menu>
                  </Dropdown>
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
                    <h4 style={{ textAlign: "center" }}>
                      <strong>No Jobs are available!</strong>
                    </h4>
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
