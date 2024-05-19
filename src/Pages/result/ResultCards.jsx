import React from "react";
import { Link } from "react-router-dom";

const ResultCards = ({ id, grade, term, session1, session2 }) => {
  return (
    <div className="result-cards">
      <div className="circle"></div>
      <p className="result-card-title">Grade {grade}</p>
      <div className="result-card-content">
        <p>
          <span className="content-title">Term</span>
          <span className="content-title">Session</span>
        </p>
        <p>
          <span className="content-text content-text-center">{term}</span>
          <span className="content-text">
            {session1}/{session2}
          </span>
        </p>
      </div>

      <div className="result-card-btn">
        <Link to={`/results/${id}/resultCard`} style={{textDecoration: 'none'}}>
          <button>Open</button>
        </Link>
      </div>
    </div>
  );
};

export default ResultCards;
