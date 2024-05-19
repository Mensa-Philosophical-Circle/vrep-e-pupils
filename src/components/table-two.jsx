import React from "react";
import avatarIcon from "../assets/avatar-icon.png";
import { useState } from "react";
import "../styles/Table.css";

function TableTwo(props) {
  const [data, setData] = useState(props.data);

  const handleCheckboxChange = (id) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, checked: !row.checked } : row
      )
    );
  };
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Date Registered</th>
            <th>Attendance</th>
            <th>Puctuality</th>
            <th>Teacher</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="table-name">
                <div className="avatar-container">
                    <img src={avatarIcon} alt="A purple circle" />
                </div>
                {row.name}
              </td>
              <td className="table-id">{row.studentNum}</td>
              <td className="table-date">{row.dateRegistered}</td>
              <td><div className="pie" style={{
                "--percentage": row.Attendance.percentage,
                "--main-color": row.Attendance.mainColor
              }}></div></td>
              <td className="puncText" style={{
                "--text-color": row.punctuality.textColor
              }}>{row.punctuality.value}</td>
              <td>{row.teacher}</td>
              <td className="table-class">{row.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableTwo;