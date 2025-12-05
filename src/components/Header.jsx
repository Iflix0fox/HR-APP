import styles from "./Header.module.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>HR App</h1>
      <nav>
        <Link to="/">Persons</Link>
        <Link to="/about">About</Link>
        <Link to="/add-employee">Add Employee</Link>
      </nav>
    </header>
  );
};

export default Header;
