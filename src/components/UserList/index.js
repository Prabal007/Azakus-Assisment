import React from "react";
import UserCard from "../UserCard";
import "./index.css"

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onEdit={() => onEdit(user)}
          onDelete={() => onDelete(user.id)}
        />
      ))}
    </div>
  );
};

export default UserList;
