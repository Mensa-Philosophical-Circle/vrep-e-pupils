import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { FaBars } from "react-icons/fa6";
import Logo from "../assets/images/logo.png";
import ResultPdf from "../Pages/result/ResultPdf";
import { usePDF } from "react-to-pdf";

const ResultMobile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { toPDF, targetRef } = usePDF({ filename: "result.pdf" });

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
      <div className="mobile-result-card-main">
        <div className="mobile-result-card">
          <div className="mobile-result-card-side">
            <div className="mobile-result-card-circle"></div>
            <div className="mobile-result-card-title">
              <h3>Grade 1</h3>
              <p>
                <span>1st</span> <span>2022/2023</span>
              </p>
            </div>
          </div>
          <button onClick={() => toPDF()}>Download</button>
          <div ref={targetRef} style={{ display: "none" }}>
            <ResultPdf />
          </div>
        </div>
        <div className="mobile-result-card">
          <div className="mobile-result-card-side">
            <div className="mobile-result-card-circle"></div>
            <div className="mobile-result-card-title">
              <h3>Grade 1</h3>
              <p>
                <span>1st</span> <span>2022/2023</span>
              </p>
            </div>
          </div>
          <button onClick={() => toPDF()}>Download</button>
          <div ref={targetRef} style={{ display: "none" }}>
            <ResultPdf />
          </div>
        </div>
        <div className="mobile-result-card">
          <div className="mobile-result-card-side">
            <div className="mobile-result-card-circle"></div>
            <div className="mobile-result-card-title">
              <h3>Grade 1</h3>
              <p>
                <span>1st</span> <span>2022/2023</span>
              </p>
            </div>
          </div>
          <button onClick={() => toPDF()}>Download</button>
          <div ref={targetRef} style={{ display: "none" }}>
            <ResultPdf />
          </div>
        </div>
        <div className="mobile-result-card">
          <div className="mobile-result-card-side">
            <div className="mobile-result-card-circle"></div>
            <div className="mobile-result-card-title">
              <h3>Grade 1</h3>
              <p>
                <span>1st</span> <span>2022/2023</span>
              </p>
            </div>
          </div>
          <button onClick={() => toPDF()}>Download</button>
          <div ref={targetRef} style={{ display: "none" }}>
            <ResultPdf />
          </div>
        </div>
        <div className="mobile-result-card">
          <div className="mobile-result-card-side">
            <div className="mobile-result-card-circle"></div>
            <div className="mobile-result-card-title">
              <h3>Grade 1</h3>
              <p>
                <span>1st</span> <span>2022/2023</span>
              </p>
            </div>
          </div>
          <button onClick={() => toPDF()}>Download</button>
          <div ref={targetRef} style={{ display: "none" }}>
            <ResultPdf />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultMobile;
