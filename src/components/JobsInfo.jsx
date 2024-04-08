import React from "react";
import Duties from "./Duties";

const JobsInfo = ({ jobs, currentItem }) => {
    
  const { title, company, dates, duties } = jobs[currentItem];

  return (
    <article className="job-info">
      <h2>{title}</h2>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobsInfo;
