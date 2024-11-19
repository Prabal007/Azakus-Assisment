import React, { useEffect, useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchUsers } from "./api/api";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

import "./App.css"

const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const USERS_PER_PAGE = 5;

  // Define loadUsers using useCallback
  const loadUsers = useCallback(() => {
    fetchUsers()
      .then((res) => {
        const start = (page - 1) * USERS_PER_PAGE;
        const end = start + USERS_PER_PAGE;
        const newUsers = res.data.slice(start, end); // Simulate pagination
        setUsers((prevUsers) => [...prevUsers, ...newUsers]);
        setHasMore(newUsers.length === USERS_PER_PAGE);
      })
      .catch((err) => alert("Error loading users: " + err.message));
  }, [page]); // Add 'page' as a dependency

  useEffect(() => {
    loadUsers();
  }, [loadUsers]); // Include 'loadUsers' in the dependency array

  const handleAddUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, { ...user, id: users.length + 1 }]); // Simulate adding user
    setShowForm(false);
  };

  const handleEditUser = (user) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === user.id ? user : u))
    );
    setShowForm(false);
  };

  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const openForm = (user = null) => {
    setEditingUser(user);
    setShowForm(true);
  };

  return (
    <div className="app">
      <h1 className="main-heading">User Management System</h1>
      {!showForm && <button onClick={() => openForm()} className="add-btn">Add User</button>}
      {showForm ? (
        <UserForm
          initialData={editingUser}
          onSubmit={editingUser ? handleEditUser : handleAddUser}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <InfiniteScroll
          dataLength={users.length}
          next={() => setPage((prevPage) => prevPage + 1)}
          hasMore={hasMore}
          loader={<p className="loading-text">Loading more users...</p>}
          endMessage={<p className="loading-text">No more users to load.</p>}
        >
          <UserList users={users} onEdit={openForm} onDelete={handleDeleteUser} />
        </InfiniteScroll>
      )}
    </div>
  );
};

export default App;
