import "../../styles/singleExamSection.css";
import journalIcon from "../../assets/journal.png";
import { Link } from "react-router-dom";

export default function SingleExamSection(props) {
  return (
    <>
      <article className="singleExamLine">
        <article className="mobileExams-row">
          <img src={journalIcon} alt="A journal Icon" />
          <article className="content exam-mobile-content">
            <h2>
              {props.number}. {props.subject} - {props.type}
            </h2>
            <p className="gray-txt txt-intructor">Instuctor: </p>
            <p className="gray-txt">
              Due Date: {props.date} at {props.time}
            </p>
          </article>
        </article>
        <article className="button">
          <Link style={{textDecoration: 'none'}} to='/exam/questions'>
            <button>Start</button>
          </Link>
        </article>
      </article>
    </>
  );
}
