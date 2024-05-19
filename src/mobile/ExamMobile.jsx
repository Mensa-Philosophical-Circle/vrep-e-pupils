import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import SingleExamSection from "../Pages/exam/singleExamLine";
import Logo from "../assets/images/logo.png";
import Sidebar from "../components/sidebar";

const ExamMobile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleToggle() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      {sidebarOpen && <Sidebar />}
      <nav className="mobile-navbar">
        <section className="logo-section">
          <div>
            <img src={Logo} alt="" style={{objectFit: 'cover', width: '50px'}}/>
          </div>
          <p>RPMS</p>
        </section>
        <section className="actions-navbar">
          <div onClick={handleToggle}>
            <FaBars onClick={handleToggle} size={24} color="white" />
          </div>
        </section>
      </nav>
      <div className="subjects subjects-details-main">
        <div className="subjects-panel subjects-panel-details">
          <h3 className="lesson-details-back">Exam</h3>
        </div>
        <article className="mobileExams mobile-exam-main-card">
          <SingleExamSection
            subject="Mathematics"
            type="Midterm"
            date="5/11/2023"
            time="10:00AM"
            number="1"
          />
          <SingleExamSection
            subject="Mathematics"
            type="Midterm"
            date="5/11/2023"
            time="10:00AM"
            number="2"
          />
          <SingleExamSection
            subject="Mathematics"
            type="Midterm"
            date="5/11/2023"
            time="10:00AM"
            number="3"
          />
          <SingleExamSection
            subject="Mathematics"
            type="Midterm"
            date="5/11/2023"
            time="10:00AM"
            number="4"
          />
          <SingleExamSection
            subject="Mathematics"
            type="Midterm"
            date="5/11/2023"
            time="10:00AM"
            number="5"
          />
        </article>
      </div>
    </>
  );
};

export default ExamMobile;
