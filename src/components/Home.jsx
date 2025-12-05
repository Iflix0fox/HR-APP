import PersonCard from "./PersonCard.jsx";
import styles from "./Personlist.module.css";

import Button from "@mui/material/Button";

function Home({ employees, handleDeleteEmployee }) {
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
