import Link from "next/link";
import styles from "../styles/Sidebar.module.css";
import Button from "./Button";
import Icon from "./Icon";
import X from "../svgs/X";
import data from "../public/metadata";
import getIcon from "../utils/icons";

export default function Sidebar(props) {
  const { sidebar, setSidebar } = props;

  function handleClose() {
    setSidebar((sidebar) => !sidebar);
  }
  return (
    <div className={`${styles.sidebar} ${sidebar && styles.active}`}>
      <div className={styles.close}>
        <Button icon onClick={handleClose}>
          <Icon>
            <X />
          </Icon>
        </Button>
      </div>
      <div className={styles.list}>
        <Link href="#about" passHref>
          <a className={styles.link} onClick={handleClose}>
            About
          </a>
        </Link>
        <Link href="#experience" passHref>
          <a className={styles.link} onClick={handleClose}>
            Experience
          </a>
        </Link>
        <Link href="#projects" passHref>
          <a className={styles.link} onClick={handleClose}>
            Projects
          </a>
        </Link>
        <Link href={"#message"} passHref>
          <a className={styles.link} onClick={handleClose}>
            Message
          </a>
        </Link>
      </div>
      <div className={styles.icons}>
        {data.social.map(({ media, link }, i) => (
          <Link key={media} href={link} passHref>
            <a target={"_blank"}>
              <Icon>{getIcon(i)}</Icon>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
