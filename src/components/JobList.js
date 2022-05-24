import React, { useContext } from "react";
import Job from "./Job";
import JobContext from "../context/JobContext";

function JobList() {
  const { job } = useContext(JobContext);
  // If no jobs in job list, display no jobs added
  if (!job || job.length === 0) {
    return <p>No jobs added</p>;
  }
  return (
    <div className="job-list">
      {job.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
