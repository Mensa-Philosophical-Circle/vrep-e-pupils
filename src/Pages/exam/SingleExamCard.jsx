import React from "react";
import calendarIcon from "../../assets/engi/calendaricon.png";
import clockIcon from "../../assets/engi/clockicon.png";

function SingleExamCard() {
  return (
    <div className="exam-card-container">
      <h3>Mathematics</h3>
      <span>Failed</span>
      <p>Subject Teacher : Mrs Faith</p>
      <p>
        <img src={calendarIcon} alt=""/>
        3-01-2023
      </p>
      <p>
        <img src={clockIcon} alt=""/>
        12:30 AM - 01:40 PM
      </p>
      <p className="percentage">
        Passing Percentage <span className="approved">70%</span>
      </p>
      <p className="percentage">
        Scored Percentage <span className="failed">65%</span>
      </p>
      <a>View Details</a>
    </div>
  );
}

export default SingleExamCard;
