import React from "react";
import { MdClose } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

const EventModal = ({ onClose }) => {
  return (
    <div className="event-modal">
      <div className="event-modal-container">
        <div className="purple-area" />
        <div className="event-content-container">
          <div className="event-card-container-close">
            <MdClose style={{cursor: 'pointer'}} onClick={onClose} />
          </div>

          <div className="event-title">Cultural Event</div>
          <div className="event-desc">School Event</div>
          <div className="event-date-container">
            <FaCalendar
              style={{
                objectFit: "contain",
                objectPosition: "center",
                width: 24,
                color: "#fb7d5b",
                marginTop: 2,
              }}
            />
            <div className="event-date">March 20, 2021</div>
          </div>
          <div className="event-time-container">
            <CiClock2
              style={{
                objectFit: "contain",
                objectPosition: "center",
                width: 24,
                color: "#fcc43e",
                marginTop: 2,
              }}
            />
            <div className="event-time">09.00 - 10.00 AM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
