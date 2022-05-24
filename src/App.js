import "./App.css";
import Profile from "./components/Profile";
import { useState } from "react";
import JobList from "./components/JobList";
import JobForm from "./components/JobForm";
import ProfileData from "./data/ProfileData";
import EmploymentData from "./data/EmploymentData";

function App() {
  const [profile, setProfile] = useState(ProfileData);
  const [job, setJobs] = useState(EmploymentData);

  const deleteJob = (id) => {
    if (window.confirm("Are you sure you want to remove this job?")) {
      setJobs(job.filter((job) => job.id !== id));
    }
  };

  return (
    <>
      <JobForm />
      <JobList job={job} handleDelete={deleteJob} />
    </>
  );
}

export default App;
