import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function Job({ job, handleDelete }) {
  return (
    <Card>
      <div className="title">{job.title}</div>
      <div className="company">{job.company}</div>
      <div className="start-date">{job.start}</div>
      <div className="end-date">{job.end}</div>
      <button onClick={() => handleDelete(job.id)} className="close">
        <FaTimes size={30} />
      </button>
    </Card>
  );
}

export default Job;
