import { useEffect, useState } from "react";
import PersonCard from "./PersonCard.jsx";
import styles from "./Personlist.module.css";

import Button from "@mui/material/Button";
import axios from "axios";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDeleteEmployee = (id) => {
    axios
      .delete(`https://hr-app-sws8.onrender.com/employees/${id}`)
      .then(() => {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  useEffect(() => {
    axios
      .get("https://hr-app-sws8.onrender.com/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Button sx={{ width: "100%" }} variant="contained">
        Click Me
      </Button>

      <div className={styles.content}>
        {employees.map((employee) => (
          <PersonCard
            key={employee.id}
            {...employee}
            handleDeleteEmployee={handleDeleteEmployee}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
