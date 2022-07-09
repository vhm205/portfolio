import CodePen from "../svgs/CodePen";
import Email from "../svgs/Email";
import Instagram from "../svgs/Instagram";
import LinkedIn from "../svgs/LinkedIn";
import Twitter from "../svgs/Twitter";
import GitHub from "../svgs/GitHub";

export default function getIcon(i) {
  let icons = [
    <Twitter key={i} />,
    <LinkedIn key={i} />,
    <Instagram key={i} />,
    <CodePen key={i} />,
    <Email key={i} />,
    <GitHub key={i} />,
  ];
  return icons[i];
}
