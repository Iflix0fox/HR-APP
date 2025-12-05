import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Our HR App</h1>

      <p>
        Our HR app is designed to make employee management simple, efficient,
        and fully organized. Instead of working with scattered spreadsheets or
        slow manual workflows, this tool puts everything in one place so teams
        can work smarter.
      </p>

      <p>
        You can track employees, manage departments, view salaries, filter data,
        and open detailed profiles with just a few clicks. The goal is to help
        companies save time, stay organized, and make better decisions using
        clean and easy-to-read information.
      </p>

      <p>
        The app is built with modern React features, a fast UI, and responsive
        components. It runs smoothly on all devices and is simple enough for
        anyone to use, even without technical experience.
      </p>

      <p>
        Whether you’re managing a small team or a growing company, this HR app
        gives you a reliable and user-friendly way to view, track, and organize
        your entire workforce.
      </p>
    </div>
  );
}

export default About;
