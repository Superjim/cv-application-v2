import Card from "./shared/Card";
import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import JobContext from "../context/JobContext";

function Job({ job }) {
  const { deleteJob, editJob } = useContext(JobContext);

  return (
    <Card>
      <div className="title">{job.title}</div>
      <div className="company">{job.company}</div>
      <div className="start-date">{job.startDate}</div>
      <div className="end-date">{job.endDate}</div>
      <button onClick={() => editJob(job)} className="edit">
        <FaEdit size={30} />
      </button>

      <button onClick={() => deleteJob(job.id)} className="close">
        <FaTimes size={30} />
      </button>
    </Card>
  );
}

export default Job;
