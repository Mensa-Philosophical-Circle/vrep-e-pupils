import React from "react";
import { usePDF } from "react-to-pdf";
import Sidebar from "../../components/sidebar";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import ResultPdf from "./ResultPdf";


const DownloadResult = () => {
  const { toPDF, targetRef } = usePDF({ filename: "result.pdf" });

  return (
    <div className="academics-page">
      <Sidebar />
      <article className="academics-main bg-exam">
        <section className="subjects-panel-container bg-exam">
          <div className="subjects">
            <div className="question-side-navbar">
              <Link style={{ textDecoration: "none" }} to="/results">
                <h3>
                  <IoMdArrowRoundBack style={{ marginRight: "10px" }} />
                  Result
                </h3>
              </Link>

              <div className="question-side-navbar-title">
                <div className="student-info">
                  <p>Temz Johnson</p>
                  <span>Pupil</span>
                </div>
                <div className="student-photo-circle"></div>
              </div>
            </div>

            <div ref={targetRef} className="result-summary-main-pdf">
                <ResultPdf/>
            </div>

            <div className="result-pdf-download-btn">
              <button onClick={() => toPDF()}>Download</button>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default DownloadResult;
