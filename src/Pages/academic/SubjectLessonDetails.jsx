import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import RightSidebar from "../../components/RightSidebar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import SubjectListMobileDetails from "../../mobile/SubjectListMobileDetails";

const SubjectLessonDetails = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);


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
        <SubjectListMobileDetails />
      ) : (
        <div className="academics-page">
          <Sidebar />
          <article className="academics-main">
            <section className="subjects-panel-container">
              <div className="subjects">
                <div className="subjects-panel">
                  <Link
                    to="/academics"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <h3 className="lesson-details-back">
                      <IoMdArrowRoundBack style={{ marginRight: "10px" }} />{" "}
                      English
                    </h3>
                  </Link>
                </div>

                <div className="lesson-details-main">
                  <p className="lesson-details-main-header">Materials</p>
                  <div className="lesson-details-card">
                    <p className="lesson-details-card-title">Chapter 1</p>
                    <span style={{ color: "#4F5477" }}>
                      Common Names and Special Names
                    </span>
                  </div>
                  <div className="lesson-details-card">
                    <p className="lesson-details-card-title">Chapter 2</p>
                    <span style={{ color: "#4F5477" }}>
                      Common Names and Special Names
                    </span>
                  </div>
                  <div className="lesson-details-card">
                    <p className="lesson-details-card-title">Chapter 3</p>
                    <span style={{ color: "#4F5477" }}>
                      Common Names and Special Names
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <RightSidebar />
          </article>
        </div>
      )}
    </>
  );
};

export default SubjectLessonDetails;
