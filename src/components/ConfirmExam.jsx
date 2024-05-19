import React from "react";
import { Link } from "react-router-dom";

const ConfirmExam = ({ onClose, title }) => {
  return (
    <div className="delete-confirm-main">
      <p>{title}</p>
      <div className="delete-btn">
        <Link style={{textDecoration: 'none'}} to='/exam/questions'>
          <button style={{ color: "#fff", background: "#082567" }}>Yes</button>
        </Link>

        <button onClick={onClose}>No</button>
      </div>
    </div>
  );
};

export default ConfirmExam;
