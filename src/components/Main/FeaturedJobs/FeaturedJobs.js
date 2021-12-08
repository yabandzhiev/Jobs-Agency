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
      (err) => {
        alert(err.message);
      }
    );
  }, []);

  return (
    <section>
      <div className="text-info text-center">
        <h2>Latest Jobs</h2>
        <p>Those are the last three jobs published right now!</p>
        <br />
      </div>
      <div class="container featured-jobs-group">
        <div class="row">
          {job.map((x) => {
            return <FeaturedJobsItem job={x} key={x._id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
