import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";
import * as jobService from "../../services/jobService.js";
import JobItemProfile from "./JobItemProfile/JobItemProfile.js";

import "./Profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userJob, setUserJob] = useState([]);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    jobService.getUserJobs(user._id).then(
      (res) => {
        setJobs(res);
        setUserJob(res);
      },
      (err) => {
        alert(err.message);
      }
    );
  }, []);

  return (
    <div className="profile-card">
      <div className="profile-back"></div>
      <img className="img-circle profile-pic" src="assets/img/profile/avatar.png" />
      <h3 className="profile-name">{user.email}</h3>
      <h2>My Job Listings</h2>
      <div className="products">
        <div className="row g-0">
          {" "}
          {jobs.length > 0 ? (
            jobs.map((x) => {
              return <JobItemProfile job={x} key={x._id} />;
            })
          ) : (
            <span>
              <strong>You haven't uploaded any jobs yet!</strong>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
