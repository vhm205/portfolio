import Link from "next/link";
import styles from "../styles/SocialLinks.module.css";
import LinkedIn from "../svgs/LinkedIn";
import Twitter from "../svgs/Twitter";
import Instagram from "../svgs/Instagram";
import Icon from "./Icon";
import CodePen from "../svgs/CodePen";
import Email from "../svgs/Email";
import data from "../public/metadata";

const links = data.social.filter(social => {
  return ["linkedin", "twitter", "instagram", "email"].includes(social.media);
})

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
      {links.map((each, i) => (
        <Link key={each.media} href={each.link} passHref>
          <a target={"_blank"}>
            <Icon>{getIcon(i)}</Icon>
          </a>
        </Link>
      ))}
    </div>
  );
}
