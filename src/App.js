import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/dashboard/Dashboard";
import DashboardErrorPage from "./Pages/dashboard/dashboardError";
import ComingSoonPage from "./Pages/comingSoon";
import Login from "./Pages/auth/login/Login";
import Academics from "./Pages/academic/Academics";
import SubjectList from "./Pages/academic/SubjectList";
import ExamPage from "./Pages/exam/exam";
import Questions from "./Pages/exam/Questions";
import Result from "./Pages/result/Result";
import DownloadResult from "./Pages/result/DownloadResult";
import { ToastifyContainer } from "./lib/toastifyLoaders";
import { RequireAuth, RequireNoAuth } from "./hooks/protectRoutes";
import { useSelector, useDispatch } from "react-redux";
import { screenSizeResize } from "./redux/slices/WindowSizeSlice";
import ELibrary from "./Pages/e-library/ELibrary";
import Terms from "./Pages/result/Terms";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(screenSizeResize(window.innerWidth));
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      dispatch(screenSizeResize(window.innerWidth));
    });
    window.removeEventListener("resize", () => {
      dispatch(screenSizeResize(window.innerWidth));
    });
  }

  return (
    <>
      <ToastifyContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<RequireNoAuth />}>

          <Route path="/login" element={<Login />} />

          </Route>
          <Route element={<RequireAuth />}>

            <Route path="/" element={<Dashboard />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/academics">
              <Route index element={<Academics />} />
              <Route path="subjectlist" element={<SubjectList />} />
            </Route>

            <Route path="/exam">
              <Route index element={<ExamPage />} />
              <Route path="questions" element={<Questions />} />
            </Route>

            <Route path="/e-library">
              <Route index element={<ELibrary />} />
            </Route>

            <Route path="/results">
              <Route index element={<Result />} />
              <Route path='terms' element={<Terms/>} />
            </Route>

            <Route path="/comingSoon" element={<ComingSoonPage />} />
          </Route>
          <Route path="*" element={<DashboardErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
