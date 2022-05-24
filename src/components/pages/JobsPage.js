import React from "react";
import Card from "../shared/Card";
import JobList from "../JobList";
import JobForm from "../JobForm";

function JobsPage() {
  return (
    <Card>
      <div className="jobs-page">
        <JobForm />
        <JobList />
      </div>
    </Card>
  );
}

export default JobsPage;
