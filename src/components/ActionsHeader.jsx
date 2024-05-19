import React from "react";
import "../styles/ActionsHeader.css";
import { getUser } from "../hooks/useStorage";

function ActionsHeader() {
  const user = getUser();

  return (
    <div className="admin-container">
      <div className="admin-info">
        <p>
          {user.first_name} {user.last_name}
          <p style={{textTransform: 'capitalize', color: '#a098ae'}}>{user.role}</p>
        </p>
        {user.photo ? (
          <img className="avatar-container" src={user.photo} alt="" />
        ) : (
          <div className="avatar-container"></div>
        )}
      </div>
    </div>
  );
}

export default ActionsHeader;
