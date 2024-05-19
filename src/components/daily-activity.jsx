import divider from "../assets/divider.png";
import dividerIcon from "../assets/divider-icon.png";
import SingleDailyActivity from "./single-daily-activity";


export default function DailyActivity(props) {
  return (
    <>
      <article className="daily-activity-section">
        <h2>{props.day}</h2>
        <article className="daily-activity">
          <div className="divider-images">
            <img src={divider} alt="A horizontal line-like rectangle" />
            <img
              src={dividerIcon}
              alt="A circle"
              className="divider-circle one"
            />
            <img
              src={dividerIcon}
              alt="A circle"
              className="divider-circle two"
            />
            <img
              src={dividerIcon}
              alt="A circle"
              className="divider-circle three"
            />
          </div>
          <div className="text">
            <SingleDailyActivity activity="Hope has created new exam for MATHEMATICS" />
            <SingleDailyActivity activity="A New Student as been added" />
            <SingleDailyActivity activity="Tony  added an event for October 1  " />
          </div>
        </article>
      </article>
    </>
  );
}
