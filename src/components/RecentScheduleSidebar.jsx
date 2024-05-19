import React from 'react';
import EventCard from './EventCard';
import '../styles/RecentSchedule.css';
import { Link } from 'react-router-dom';

function RecentScheduleSidebar() {
  return (
    <>
      <div className='recent-schedule'>
        <h2>Recent Schedule</h2>
        <section>
          <EventCard />
          <EventCard />
        </section>
      </div>
    </>
  );
}

export default RecentScheduleSidebar;

