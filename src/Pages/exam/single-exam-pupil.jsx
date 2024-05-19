import grayCalender from "../../assets/gray-calender.png";
import grayClock from "../../assets/clock-icon.png";
import "../../styles/singlePupilsExam.css";
import Modal from "../../components/Modal";
import { useState } from "react";
import ConfirmExam from "../../components/ConfirmExam";

export default function SingleExamPupil({
  subject,
  subjectTeacher,
  time,
  passingPercentage,
  status,
  date,
  examStatus,
  startDate,
  finishDate
}) {

    const [openModal, setOpenModal] = useState(false);

  let statusLabel = "";
  let passingPercentageLabel = passingPercentage;
  let passingPercentageColor = "";
  let passingPercentageBackgroundColor = "";

  switch (examStatus) {
    case "Missed":
      statusLabel = "Missed";
      passingPercentageLabel = 0;
      passingPercentageColor = "black";
      passingPercentageBackgroundColor = "#989898";
      break;
    case "Failed":
      statusLabel = "Failed";
      if (passingPercentage > 65) passingPercentageLabel = 65;
      passingPercentageColor = "#F93333";
      passingPercentageBackgroundColor = "#F93333";
      break;
    case "Passed":
      statusLabel = "Passed";
      if (passingPercentage < 66) passingPercentageLabel = 66;
      passingPercentageColor = "#0CBC8B";
      passingPercentageBackgroundColor = "#0CBC8B";
      break;
    default:
      statusLabel = examStatus;
  }

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  return (
    <>
      <article className="exam">
        <h3>
          {subject}
          <span
            style={{ background: passingPercentageBackgroundColor }}
            className="exam-status-label"
          >
            {statusLabel}
          </span>
        </h3>
        <p>Subject Teacher: {subjectTeacher}</p>
        <p className="row">
          <img src={grayCalender} alt="A gray calendar icon" />
          {date}
        </p>
        {status ? (
          <p className="row">
            {" "}
            <img src={grayClock} alt="A gray clock" />
            {time} Minutes
          </p>
        ) : (
          <p className="row">
            {" "}
            <img src={grayClock} alt="A gray clock" />
            {startDate} - {finishDate}
          </p>
        )}

        {status ? (
          <p>
            Passing Percentage:{" "}
            <span
              className="blue-txt"
              style={{ color: passingPercentageColor }}
            >
              {passingPercentageLabel}%
            </span>
          </p>
        ) : (
          <p>
            Scored Percentage:{" "}
            <span
              className="blue-txt"
              style={{ color: passingPercentageColor }}
            >
              {passingPercentageLabel}%
            </span>
          </p>
        )}

        <p style={{ display: status ? "block" : "none" }}>
          Status:{" "}
          <span style={{ color: status === "Open" ? "#082567" : "#F93333" }}>
            {status}
          </span>
        </p>
        {status ? (
          <div className="exam-card-start-btn">
            <button
              onClick={handleModalOpen}
              disabled={status === "Closed"}
              style={{
                cursor: status === "Closed" ? "not-allowed" : "pointer",
                backgroundColor: status === "Closed" ? "gray" : "",
              }}
            >
              Start Exam
            </button>
          </div>
        ) : (
          <></>
        )}
      </article>

    <Modal quiz={true} isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ConfirmExam
        title='Do you want to start the exam?'
        onClose={() => setOpenModal(false)}
        />
    </Modal>

    </>
  );
}
