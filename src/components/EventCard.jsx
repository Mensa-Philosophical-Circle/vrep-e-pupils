import React from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";

function EventCard() {
  return (
    <div className="single-event-card">
      <h3>Cultural Event</h3>
      <span>School Event</span>
      <div>
        <AiOutlineCalendar size={18} className="calendar-icon" />
        <span>March 20, 2021</span>
      </div>
      <div>
        <AiOutlineClockCircle size={18} className="clock-icon" />
        <span>09.00 - 10.00 AM</span>
      </div>
    </div>
  );
}

export default EventCard;
