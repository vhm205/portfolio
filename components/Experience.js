import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Experience.module.css";
import useOnScreen from "../utils/useOnScreen";
import data from "../public/metadata";
import Img from "./Img";

export default function Experience() {
  const [index, setIndex] = useState(0);
  const [ref, visible] = useOnScreen({ rootMargin: "-100px" });
  return (
    <div
      className={`${styles.experience} ${visible && "fadeBottom"}`}
      style={{ "--delay": 5 }}
      ref={ref}
      id="experience"
    >
      <div className={styles.wrapper}>
        <code>&#128119; Real-world</code>
        <h2>Experience</h2>
        <p>
          I have worked in these following companies to get the feel of how they
          work and how I should supposed to be worked there. It helped me alot
          about the development process, from <strong>code quality</strong> to{" "}
          <strong>collaboration</strong>, and many other crucial things.
        </p>
        <div className={styles.showcase}>
          <div className={styles.buttons}>
            {data.experience.map((each, i) => (
              <button
                key={i}
                className={`${styles.logoButton} ${
                  index === i && styles.activeButton
                }`}
                onClick={() => setIndex(i)}
              >
                <Img
                  img={each.logo}
                  imgAlt={each.logoAlt}
                  width={50}
                  height={50}
                />
              </button>
            ))}
          </div>
          <div className={styles.description}>
            <h3>
              {data.experience[index].position}
              {" @ "}
              <Link href={data.experience[index].link}>
                {data.experience[index].company}
              </Link>
            </h3>
            <code>{data.experience[index].date}</code>
            <h4>Main responsibilities:</h4>
            <ul className={styles.list}>
              {data.experience[index].descriptions.map((each, i) => (
                <li key={i} className={styles.item}>
                  {each}
                </li>
              ))}
            </ul>
            <h4>What i did:</h4>
            <ul className={styles.list}>
              {data.experience[index].did.map((each, i) => (
                <li key={i} className={styles.item}>
                  {each}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
