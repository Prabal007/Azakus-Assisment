import React, { useState } from "react";
import "./index.css";

const UserForm = ({ initialData, onSubmit, onCancel }) => {
  const [user, setUser] = useState(
    initialData || {
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    }
  );
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

     
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!user.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (user.firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters.";
    }

    if (!user.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (user.lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters.";
    }

    if (!user.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Email is not valid.";
    }

    if (!user.department.trim()) {
      newErrors.department = "Department is required.";
    } else if (user.department.length < 3) {
      newErrors.department = "Department must be at least 3 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(user);
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">Submission Form</h1>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="input-field-container">
        <label htmlFor="username" className="login-input-label">
          USERNAME
        </label>
          <input
            id  = "username"
            className="form-input-field"
            name="firstName"
            placeholder="First Name"
            value={user.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && (
            <span className="error-msg">{errors.firstName}</span>
          )}
        </div>
        <div className="input-field-container">
        <label htmlFor="lastname" className="login-input-label">
          LASTNAME
        </label>
          <input
            className="form-input-field"
            id = "lastname"
            name="lastName"
            placeholder="Last Name"
            value={user.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
        </div>
        <div className="input-field-container">
        <label htmlFor="email" className="login-input-label">
          EMAIL
        </label>
          <input
            id = "email"
            className="form-input-field"
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>
        <div className="input-field-container">
        <label htmlFor="department" className="login-input-label">
          DEPARTMENT
        </label>
          <input
            className="form-input-field"
            id = "department"
            name="department"
            placeholder="Department"
            value={user.department}
            onChange={handleChange}
            required
          />
          {errors.department && (
            <span className="error-msg">{errors.department}</span>
          )}
        </div>
        <button type="submit" className="form-button">Save</button>
        <button type="button" onClick={onCancel} className="form-button" >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UserForm;
