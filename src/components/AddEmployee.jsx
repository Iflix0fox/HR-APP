import styles from "./AddEmployee.module.css";

function AddEmployee({ formData, setFormData, handleClick }) {
  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeData = {
      ...formData,
      skills: formData.skills.split(",").map((skill) => skill.trim()),
    };
    handleClick(employeeData);
    console.log(employeeData);

    setFormData({
      name: "",
      title: "",
      salary: "",
      phone: "",
      email: "",
      animal: "",
      startDate: "",
      location: "",
      department: "",
      skills: "",
    });
  };

  return (
    <div className="card">
      <h2>Add Employee</h2>
      <form className={styles.addEmployees} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="salary">Salary</label>
        <input
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="animal">Animal</label>
        <input
          id="animal"
          name="animal"
          value={formData.animal}
          onChange={handleChange}
        />

        <label htmlFor="startDate">Start date</label>
        <input
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />

        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

        <label htmlFor="department">Department</label>
        <input
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />

        <label htmlFor="skills">Skills</label>
        <input
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />

        <button type="submit">Add employee</button>
        <button
          type="reset"
          onClick={() => {
            setFormData({
              name: "",
              title: "",
              salary: "",
              phone: "",
              email: "",
              animal: "",
              startDate: "",
              location: "",
              department: "",
              skills: "",
            });
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
