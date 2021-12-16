import FeaturedJobsItem from "./JobsItem/FeaturedJobsItem.js";
import { useState, useEffect } from "react";
import * as jobService from "../../../services/jobService.js";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
  const [job, setJob] = useState([]);

  useEffect(() => {
    jobService.getLastThree().then(
      (res) => {
        setJob(res);
      },
      (err) => {}
    );
  }, []);

  return (
    <section className="clean-block clean-info dark">
      <div className="text-info text-center block-heading">
        <h2>Latest Jobs</h2>
        <p style={{ color: "black" }}>
          Those are the last three jobs published right now!
        </p>
        <br />
      </div>
      <div className="container featured-jobs-group">
        <div className="row">
          {job.length > 0 ? (
            job.map((x) => {
              return <FeaturedJobsItem job={x} key={x._id} />;
            })
          ) : (
            <h4>No Jobs are available at the moment!</h4>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
