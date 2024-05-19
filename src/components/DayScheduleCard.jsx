import { useState } from "react";
import { IoIosArrowUp,  IoIosArrowDown} from "react-icons/io";

function DayScheduleCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <li>
        <p>
          {props.day}
          <span>8:00-15:00</span>
        </p>
        {isOpen ? (
          <IoIosArrowUp onClick={handleToggle} size={20}/>
        ) : (
          <IoIosArrowDown onClick={handleToggle} size={20}/>
        )}
      </li>
      {isOpen && (
        <section>
          <div>
            <h3>Physics</h3>
            <p>Grade 6</p>
            <p>8:00-9:00</p>
          </div>
          <div>
            <h3>Physics</h3>
            <p>Grade 6</p>
            <p>8:00-9:00</p>
          </div>
        </section>
      )}
    </>
  );
}

export default DayScheduleCard;
