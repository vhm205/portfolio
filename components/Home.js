import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import Link from "next/link";
import createMarkup from "../utils/markup";
import data from "../public/metadata";
import Img from "./Img";

export default function Home() {
  return (
    <div className={`${styles.home} fadeBottom`} style={{ "--delay": 12 }}>
      <div className={styles.intro}>
        <code>&#128075; Hi there,</code>
        <h2>I am</h2>
        <h1>{data.lastname}</h1>
        <p dangerouslySetInnerHTML={createMarkup(data.description)} />
        <Link href={data.resume} passHref>
          <a className={"btnLink"} target="_blank">
            <Button fill big>
              Get CV
            </Button>
          </a>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Img img={data.pic} imgAlt={data.pic} layout objectFit="cover" />
      </div>
    </div>
  );
}
