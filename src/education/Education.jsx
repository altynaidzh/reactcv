import React from "react";
import "../education/education.css";

const Education = () => {
  return (
    <div id="education__block">
      <h2>Education</h2>
      <div className="education__block_first">
        <p>
          <strong>Institution:</strong> International Alatoo University
        </p>
        <p>
          <strong>Faculty:</strong> Faculty of Economics and Administrative
          Sciences
        </p>
        <p>
          <strong>Date:</strong> 2017-2021
        </p>
      </div>

      <div classNames="education__block_first">
        <p>
          <strong>Institution:</strong> Makers Courses
        </p>
        <p>
          <strong>Course:</strong> Web Development (Front-End: JS)
        </p>
        <p>
          <strong>Date:</strong> June-October 2023
        </p>
      </div>
    </div>
  );
};

export default Education;
