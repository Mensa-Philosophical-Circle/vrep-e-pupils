import React from 'react'
import moment from 'moment';
import CalendarTitle from './calendarTitle';


const events = [
  {
    start: moment("2024-02-20T10:00:00").toDate(),
    end: moment("2024-02-20T11:00:00").toDate(),
    title: "MRI Registration",
  },
  {
    start: moment("2024-02-21T14:00:00").toDate(),
    end: moment("2024-02-20T15:30:00").toDate(),
    title: "ENT Appointment",
  },
];

const CalendarControl = () => {
  return (
    <>
      <CalendarTitle
      events={events}
      max={moment("2024-02-20T18:00:00").toDate()}
      min={moment("2024-02-20T08:00:00").toDate()}
      /> 
    </>
  )
}

export default CalendarControl
