import Link from "next/link";
import styles from "../styles/SocialLinks.module.css";
import LinkedIn from "../svgs/LinkedIn";
import Twitter from "../svgs/Twitter";
import Instagram from "../svgs/Instagram";
import Icon from "./Icon";
import CodePen from "../svgs/CodePen";
import Email from "../svgs/Email";

const data = [
  "https://www.linkedin.com/in/vhm205/",
  "https://twitter.com/vhm102/",
  "https://www.instagram.com/vhm.205/",
  "mailto:minhvh.tech@gmail.com",
];

export default function SocialLinks() {
  function getIcon(i) {
    let icons = [
      <LinkedIn key={i} />,
      <Twitter key={i} />,
      <Instagram key={i} />,
      <Email key={i} />,
    ];
    return icons[i];
  }

  return (
    <div className={`${styles.icons} sideFadeBottom`} style={{ "--delay": 15 }}>
      {data.map((each, i) => (
        <Link key={each} href={each} passHref>
          <a target={"_blank"}>
            <Icon>{getIcon(i)}</Icon>
          </a>
        </Link>
      ))}
    </div>
  );
}
