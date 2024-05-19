import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { FaBars } from "react-icons/fa6";
import Logo from "../assets/images/logo.png";
import "../styles/Subjects.css";
import { BsJournalBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const SubjectListMobileDetails = () => {
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
          <Link
            to="/academics"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3 className="lesson-details-back">
              <IoMdArrowRoundBack style={{ marginRight: "10px" }} /> Materials
            </h3>
          </Link>
        </div>
        <div className="mobile-lesson-details-main">
          <div className="lesson-details-card lesson-mobile-details-card">
            <BsJournalBookmark
              style={{ marginRight: "15px" }}
              color="#434343"
              size={40}
            />
            <div>
              <p className="lesson-details-card-title">Chapter 1</p>
              <span style={{ color: "#4F5477" }}>
                Common Names and Special Names
              </span>
            </div>
          </div>
          <div className="lesson-details-card lesson-mobile-details-card">
            <BsJournalBookmark
              style={{ marginRight: "15px" }}
              color="#434343"
              size={40}
            />
            <div>
              <p className="lesson-details-card-title">Chapter 2</p>
              <span style={{ color: "#4F5477" }}>
                Common Names and Special Names
              </span>
            </div>
          </div>
          <div className="lesson-details-card lesson-mobile-details-card">
            <BsJournalBookmark
              style={{ marginRight: "15px" }}
              color="#434343"
              size={40}
            />
            <div>
              <p className="lesson-details-card-title">Chapter 3</p>
              <span style={{ color: "#4F5477" }}>
                Common Names and Special Names
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectListMobileDetails;
