import React from "react";
import { useState } from "react";
import "../styles/Table.css";

function Table(props) {
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
            <th>
              <input
                type="checkbox"
                onChange={() => {
                  setData((prevData) => {
                    const allChecked = prevData.every((row) => row.checked);
                    return prevData.map((row) => ({
                      ...row,
                      checked: !allChecked,
                    }));
                  });
                }}
                checked={data.every((row) => row.checked)}
              />
            </th>
            <th>Name</th>
            <th>ID</th>
            <th>Date Registered</th>
            <th>Nationality</th>
            <th>DOB</th>
            <th>Teacher</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="checkbox"
                  checked={row.checked}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </td>
              <td className="table-name">
                <div className="avatar-container"></div>
                {row.col2}
              </td>
              <td className="table-id">{row.col3}</td>
              <td className="table-date">{row.col4}</td>
              <td>{row.col5}</td>
              <td>{row.col6}</td>
              <td>{row.col7}</td>
              <td className="table-class">{row.col8}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
