import React from "react";

const SubmitExam = ({ onClose, title, handleSubmit }) => {
  return (
    <div className="delete-confirm-main">
      <p>{title}</p>
      <div className="delete-btn">
          <button onClick={handleSubmit} style={{ color: "#fff", background: "#082567" }}>Yes</button>
          <button onClick={onClose}>No</button>
      </div>
    </div>
  );
};

export default SubmitExam;
