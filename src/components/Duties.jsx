import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import {v4 as uuidv4} from 'uuid';

const Duties = ({ duties }) => {
  console.log(duties);
  return (
    <div>
      {duties.map((duty) => {
        const id = uuidv4(); // we are using new id called "uuid"
        console.log(id);
        return (
          <div key={id} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
