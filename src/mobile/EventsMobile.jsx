import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { FaBars } from "react-icons/fa6";
import Logo from "../assets/images/logo.png";
import Calendar from "react-calendar";
import EventCard from "../components/EventCard";

const EventsMobile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleToggle() {
    setSidebarOpen(!sidebarOpen);
  }

  const [date, setDate] = useState(new Date());

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

  return (
    <>
      {sidebarOpen && <Sidebar />}
      <nav className="mobile-navbar">
        <section className="logo-section">
          <div>
            <img
              src={Logo}
              alt=""
              style={{ objectFit: "cover", width: "50px" }}
            />
          </div>
          <p>RPMS</p>
        </section>
        <section className="actions-navbar">
          <div onClick={handleToggle}>
            <FaBars onClick={handleToggle} size={24} color="white" />
          </div>
        </section>
      </nav>

      <div className="subjects">
        <div className="subjects-panel">
          <h3>Calendar</h3>
        </div>

        <div className="events-mobile-drop-down">
          <select>
            {months.map((v, i) => (
              <option key={i} value={v.value}>
                {v.title}
              </option>
            ))}
          </select>
          <select style={{ marginLeft: "20px" }}>
            {years.map((v, i) => (
              <option key={i} value={v.value}>
                {v.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mobile-calendar-main-side">
          <Calendar onChange={setDate} value={date} />
        </div>
        <div className="mobile-events-main-card">
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
      </div>
    </>
  );
};

export default EventsMobile;
