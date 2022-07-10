import styles from "../styles/About.module.css";
import Link from "next/link";
import createMarkup from "../utils/markup";
import useOnScreen from "../utils/useOnScreen";
import { Fragment } from "react";
import data from "../public/metadata";
import Img from "./Img";

export default function About() {
  const [ref, visible] = useOnScreen({ rootMargin: "-100px" });
  return (
    <div
      className={`${styles.about} ${visible && "fadeBottom"}`}
      style={{ "--delay": 5 }}
      ref={ref}
      id="about"
    >
      <div className={styles.intro}>
        <code>&#129299; Little bit</code>
        <h2>About Me</h2>
        {data.about.descriptions.map(
          (each, i) =>
            i < data.about.descriptions.length - 1 && (
              <p key={i} dangerouslySetInnerHTML={createMarkup(each)} />
            )
        )}
        <p className={styles.listName}>
          Here are some of the technologies I have worked upon recently
        </p>
        <ul className={styles.list}>
          {data.about.skills.map((each, i) => (
            <li className={styles.item} key={i}>
              {each}
            </li>
          ))}
        </ul>
        <p>{data.about.descriptions[data.about.descriptions.length - 1]}</p>
        {/* <p>
          Here are my profiles on these coding platforms -{" "}
          {data.about.cp.map((each, i) => (
            <Fragment key={i}>
              <Link href={each.link}>
                <a target={"_blank"}>{each.platform}</a>
              </Link>
              {i !== data.about.cp.length - 1 && ", "}
            </Fragment>
          ))}
        </p> */}
      </div>
      <div className={styles.imageContainer}>
        <Img
          img={data.about.illustration}
          imgAlt={data.about.illustrationAlt}
          layout
          objectFit="contain"
        />
      </div>
    </div>
  );
}
