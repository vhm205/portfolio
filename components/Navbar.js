import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Button from "./Button";
import Icon from "./Icon";
import LogoIcon from "./LogoIcon";
import Logo from "../svgs/Logo";
import GitHub from "../svgs/GitHub";
import DarkToggle from "../svgs/DarkToggle";
import LightToggle from "../svgs/LightToggle";
import Menu from "../svgs/Menu";
import data from "../public/metadata";
import useScrollHide from "../utils/useScrollHide";
import useThemeChange from "../utils/useThemeChange";

export default function Navbar({ handleSidebar }) {
  const visible = useScrollHide();
  const { theme, handleThemeChange } = useThemeChange();
  return (
    <header className={`${styles.navbar} ${!visible && styles.hidden}`}>
      <div className={`container ${styles.container}`}>
        <Link href="/" passHref>
          <a className="fadeBottom" style={{ "--delay": 1 }}>
            <LogoIcon animate>
              <Logo />
            </LogoIcon>
          </a>
        </Link>
        <div className={styles.hide}>
          <Button icon animate onClick={handleThemeChange}>
            <Icon>{theme === "light" ? <DarkToggle /> : <LightToggle />}</Icon>
          </Button>
          <Button icon animate onClick={handleSidebar}>
            <Icon>
              <Menu />
            </Icon>
          </Button>
        </div>
        <div className={styles.links}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li
                className={`${styles.item} fadeBottom`}
                style={{ "--delay": 2 }}
              >
                <Link href="#about">About</Link>
              </li>
              <li
                className={`${styles.item} fadeBottom`}
                style={{ "--delay": 3 }}
              >
                <Link href="#experience">Experience</Link>
              </li>
              <li
                className={`${styles.item} fadeBottom`}
                style={{ "--delay": 4 }}
              >
                <Link href="#projects">Projects</Link>
              </li>
              <li
                className={`${styles.item} fadeBottom`}
                style={{ "--delay": 5 }}
              >
                <Link href={"#message"} passHref>
                  <a className="btnLink">
                    <Button>Hire me</Button>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.right}>
          <Link href={data.social[0].link} passHref>
            <a
              target={"_blank"}
              className="fadeBottom"
              style={{ "--delay": 6 }}
            >
              <Icon>
                <GitHub />
              </Icon>
            </a>
          </Link>
          <Button icon onClick={handleThemeChange} animate>
            <Icon>{theme === "light" ? <DarkToggle /> : <LightToggle />}</Icon>
          </Button>
        </div>
      </div>
    </header>
  );
}
