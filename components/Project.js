import Link from "next/link";
import styles from "../styles/Project.module.css";
import Icon from "./Icon";
import GitHub from "../svgs/GitHub";
import Site from "../svgs/Site";
import Img from "./Img";

export default function Project({ project, reverse }) {
  return (
    <div className={`${styles.project} ${reverse && styles.reverse}`}>
      <div className={styles.details}>
        <h3>{project.name}</h3>
        <div className={styles.description}>
          {project.descriptions.map((each, i) => (
            <p key={i}>{each}</p>
          ))}
        </div>
        <div className={styles.tags}>
          {project.tags.map((tag, i) => (
            <code key={i}>{tag}</code>
          ))}
        </div>
        <div className={styles.links}>
          <Link href={project.github} passHref>
            <a target={"_blank"}>
              <Icon>
                <GitHub />
              </Icon>
            </a>
          </Link>
          <Link href={project.live} passHref>
            <a target={"_blank"}>
              <Icon fill>
                <Site />
              </Icon>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Img
          img={project.screenshot}
          imgAlt={project.screenshotAlt}
          layout
          objectFit="cover"
        />
      </div>
    </div>
  );
}
