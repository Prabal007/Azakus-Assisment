import React from "react";
import "./index.css"

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <h3 className="user-name">{`${user.firstName} ${user.lastName}`}</h3>
      <p className="user-data">Email: {user.email}</p>
      <p className="user-data">Department: {user.department}</p>
      <button onClick={onEdit} className="card-btn">Edit</button>
      <button onClick={onDelete} className="card-btn">Delete</button>
    </div>
  );
};

export default UserCard;
