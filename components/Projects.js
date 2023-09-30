import styles from "../styles/Projects.module.css";
import Project from "./Project";
import Button from "./Button";
import Link from "next/link";
import useOnScreen from "../utils/useOnScreen";
import data from "../public/metadata";

export default function Projects() {
  const [ref, visible] = useOnScreen({ rootMargin: "-100px" });
  return (
    <div
      className={`${styles.projects} ${visible && "fadeBottom"}`}
      style={{ "--delay": 5 }}
      ref={ref}
      id="projects"
    >
      <div className={styles.wrapper}>
        <code>&#128293; Hand-made</code>
        <h2>Projects</h2>
        <p>
          The following projects helped me alot in grasping & mastering a ton of
          concepts about frontend to backend.
        </p>
        <div className={styles.showcase}>
          {data.projects.map((project, i) => (
            <Project key={i} project={project} reverse={!(i % 2)} />
          ))}
        </div>
        <Link href={data.archive} passHref>
          <a className={"btnLink"} target="_blank">
            <Button fill>All projects archive</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
