import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import EventBurger from "../../components/event-burger";
import "../../styles/calendar.css";
import "../../styles/responsive.css";
import "../../mobile/Mobile.css";
import { FaCaretDown } from "react-icons/fa6";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarControl from "./CalendarControl";
import EventsMobile from "../../mobile/EventsMobile";

function Events() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  const years = [
    {
      title: "2020",
      value: "2020",
    },
    {
      title: "2021",
      value: "2021",
    },
    {
      title: "2022",
      value: "2022",
    },
    {
      title: "2023",
      value: "2023",
    },
    {
      title: "2024",
      value: "2024",
    },
  ];

  const months = [
    {
      title: "January",
      value: "January",
    },
    {
      title: "February",
      value: "February",
    },
    {
      title: "March",
      value: "March",
    },
    {
      title: "April",
      value: "April",
    },
    {
      title: "May",
      value: "May",
    },
    {
      title: "June",
      value: "June",
    },
    {
      title: "July",
      value: "July",
    },
    {
      title: "August",
      value: "August",
    },
    {
      title: "September",
      value: "September",
    },
    {
      title: "October",
      value: "October",
    },
    {
      title: "November",
      value: "November",
    },
    {
      title: "December",
      value: "December",
    },
  ];

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1000);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <><EventsMobile/> </>
      ) : (
        <div className="academics-page">
          <Sidebar active="events" />
          <article className="academics-main">
            <section className="subjects-panel-container bg-calendar">
              <div className="subjects">
                <div className="calendar-navbar-main">
                  <h3>Calendar</h3>
                  <div className="calendar-drop-down">
                    <div className="drop-down-row">
                      <select>
                        {months.map((v, i) => (
                          <option key={i} value={v.value}>
                            {v.title}
                          </option>
                        ))}
                      </select>
                      <FaCaretDown className="drop-down-icon" />
                    </div>
                    <div className="drop-down-row">
                      <select>
                        {years.map((v, i) => (
                          <option key={i} value={v.value}>
                            {v.title}
                          </option>
                        ))}
                      </select>
                      <FaCaretDown className="drop-down-icon" />
                    </div>
                  </div>
                </div>

                <div className="big-calendar-main-side">
                  <CalendarControl />
                </div>
              </div>
            </section>
            <div className="calendarside-container bg-right-side-calendar">
              <div className="calendar-rigth-side-title">
                <h3>Recent Schedule</h3>
                <p>Tuesday, 10th April, 2021</p>
              </div>
              <div className="calendar-right-card-side">
                <EventBurger
                  color="#4D44B5"
                  title="Cultural Event"
                  subTitle="School Event"
                />
                <EventBurger
                  color="#FB7D5B"
                  title="Cultural Event"
                  subTitle="School Event"
                />
                <EventBurger
                  color="#FCC43E"
                  title="Cultural Event"
                  subTitle="School Event"
                />
                <EventBurger
                  color="#303972"
                  title="Cultural Event"
                  subTitle="School Event"
                />
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}

export default Events;
