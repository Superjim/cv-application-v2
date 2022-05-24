import React from "react";

function JobForm() {
  return (
    <div>
      <form>
        <div className="input">
          <label htmlFor="title">Title:</label>
          <input name="title" type="text" placeholder="Job Title" />
        </div>
      </form>
    </div>
  );
}

export default JobForm;
