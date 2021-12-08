import { useState, useEffect } from "react";

import * as jobService from "../services/jobService";

const useJobState = (jobId) => {
  const [job, setJob] = useState({});

  useEffect(() => {
    jobService.getOne(jobId).then((jobResult) => {
      setJob(jobResult);
    });
  }, [jobId]);

  return [job, setJob];
};

export default useJobState;
