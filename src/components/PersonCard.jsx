import { useState } from "react";
import axios from "axios";
import styles from "./Card.module.css";
import animalEmojis from "../assets/animalEmojis.json";

import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const Card = (props) => {
  const [employee, setEmployee] = useState(props);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const { handleDeleteEmployee } = props;

  const [formData, setFormData] = useState({
    salary: employee?.salary || "",
    location: employee?.location || "",
    department: employee?.department || "",
    skills: employee?.skills.join(", ") || "",
  });

  const yearsEmployed =
    new Date().getFullYear() - new Date(employee.startDate).getFullYear();

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = () => {
    // Reset formData to original values
    setFormData({
      salary: employee.salary,
      location: employee.location,
      department: employee.department,
      skills: employee.skills.join(", "),
    });
    setIsEditing(false);
  };

  const handleSave = () => {
    // Build object with only changed fields
    const changedFields = {};
    for (const key in formData) {
      if (
        (key === "skills" && formData[key] !== employee[key].join(", ")) ||
        (key !== "skills" && formData[key] !== employee[key])
      ) {
        if (key === "skills") {
          changedFields[key] = formData[key].split(",").map((s) => s.trim());
        } else if (key === "salary") {
          changedFields[key] = Number(formData[key]);
        } else {
          changedFields[key] = formData[key];
        }
      }
    }

    if (Object.keys(changedFields).length === 0) {
      // Nothing changed
      setIsEditing(false);
      return;
    }

    // Send PATCH request
    axios
      .patch(
        `https://hr-app-sws8.onrender.com/employees/${employee.id}`,
        changedFields
      )
      .then((res) => {
        setEmployee(res.data);
        setMessage("Changes saved!");
        setTimeout(() => setMessage(""), 2000);
        setIsEditing(false);
      })
      .catch((err) => {
        console.log("Error saving employee:", err.message);
      });
  };

  if (isEditing) {
    return (
      <div className={styles.card}>
        <form>
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />

          <label htmlFor="department">Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />

          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </form>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSave}>Save</button>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.name}>{employee.name}</div>
      <div className={styles.title}>Title: {employee.title}</div>
      <div className={styles.salary}>Salary: {employee.salary}</div>
      <div className={styles.phone}>Phone: {employee.phone}</div>
      <div className={styles.email}>Email: {employee.email}</div>
      <div className={styles.animal}>
        Animal: {animalEmojis[employee.animal]}
      </div>
      <div className={styles.startDate}>Start Date: {employee.startDate}</div>
      <div className={styles.location}>Location: {employee.location}</div>
      <div className={styles.department}>Department: {employee.department}</div>
      <div className={styles.skills}>Skills: {employee.skills.join(", ")}</div>
      <div className={styles.yearsEmployed}>
        Years Employed: {yearsEmployed}{" "}
      </div>

      {yearsEmployed === 5 && "🎉 Schedule recognition meeting."}
      {yearsEmployed === 10 && "🎉 Schedule recognition meeting."}
      {yearsEmployed === 15 && "🎉 Schedule recognition meeting."}
      {yearsEmployed < 0.5 && "🔔 Schedule recognition review."}

      <button onClick={toggleEdit}>Edit</button>

      <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
      <Button
        onClick={() => handleDeleteEmployee(employee.id)}
        variant="contained"
        color="secondary"
        sx={{ padding: "0.5px" }}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>

      {message && <div className={styles.message}>{message}</div>}
    </div>
  );
};

export default Card;
