import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [job, setJobs] = useState([
    // {
    //   id: 1,
    //   title: "context Roofer",
    //   company: "Self Employed",
    //   startDate: "startRoof",
    //   endDate: "endRoof",
    // },
  ]);

  const [jobEdit, setJobEdit] = useState({
    job: {},
    edit: false,
  });

  //add a new job at the start of the array
  const addJob = (newJob) => {
    newJob.id = uuidv4();
    setJobs([newJob, ...job]);
  };

  //set job to be updated
  const editJob = (job) => {
    setJobEdit({
      job,
      edit: true,
    });
  };

  //update job after editing
  const updateJob = (id, updatedJob) => {
    setJobs(
      job.map((job) => (job.id === id ? { ...job, ...updatedJob } : job))
    );
    setJobEdit({
      item: {},
      edit: false,
    });
  };

  //delete a job from the array
  const deleteJob = (id) => {
    if (window.confirm("Are you sure you want to remove this job?")) {
      setJobs(job.filter((job) => job.id !== id));
    }
  };

  return (
    <JobContext.Provider
      value={{
        job,
        jobEdit,
        // functions
        deleteJob,
        addJob,
        editJob,
        updateJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContext;
