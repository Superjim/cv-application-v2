import React, { useState, useContext, useEffect } from "react";
import JobContext from "../context/JobContext";

function JobForm() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { addJob, jobEdit, updateJob } = useContext(JobContext);

  useEffect(() => {
    if (jobEdit.edit === true) {
      setTitle(jobEdit.job.title);
      setCompany(jobEdit.job.company);
      setStartDate(jobEdit.job.startDate);
      setEndDate(jobEdit.job.endDate);
    }
  }, [jobEdit]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    // todo: enable / disable button if empty field
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = {
      title,
      company,
      startDate,
      endDate,
    };
    if (jobEdit.edit === true) {
      updateJob(jobEdit.job.id, job);
    } else {
      addJob(job);
    }
    setTitle("");
    setCompany("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="title">Job Title:</label>
          <input
            name="title"
            type="text"
            placeholder="Job Title"
            onChange={handleTitleChange}
            value={title}
          />
          <br></br>
          <label htmlFor="company">Company:</label>
          <input
            name="company"
            type="text"
            placeholder="Company"
            onChange={handleCompanyChange}
            value={company}
          />
          <br></br>
          <label htmlFor="start">Start Date:</label>
          <input
            name="start"
            type="date"
            onChange={handleStartDateChange}
            value={startDate}
          />
          <br></br>
          <label htmlFor="end">End Date:</label>
          <input
            name="end"
            type="date"
            onChange={handleEndDateChange}
            value={endDate}
          />
          <br></br>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default JobForm;
