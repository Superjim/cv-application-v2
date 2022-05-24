import React from "react";
import Job from "./Job";
import Proptypes from "prop-types";

function JobList({ job, handleDelete }) {
  // If no jobs in job list, display no jobs added
  if (!job || job.length === 0) {
    return <p>No jobs added</p>;
  }
  console.log(job);
  return (
    <div className="job-list">
      {job.map((job) => (
        <Job key={job.id} job={job} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

JobList.propTypes = {
  job: Proptypes.array,
};

export default JobList;
