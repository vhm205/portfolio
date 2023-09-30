import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Experience.module.css";
import useOnScreen from "../utils/useOnScreen";
import data from "../public/metadata";
import Img from "./Img";
import createMarkup from "../utils/markup";

export default function Experience() {
  const [index, setIndex] = useState(0);
  const [ref, visible] = useOnScreen({ rootMargin: "-100px" });

  const {
		products = [],
		descriptions = [],
    did = [],
		company,
		link,
		position,
    date,
	} = data.experience[index];

  return (
		<div
			className={`${styles.experience} ${visible && 'fadeBottom'}`}
			style={{ '--delay': 5 }}
			ref={ref}
			id="experience"
		>
			<div className={styles.wrapper}>
				<code>&#128119; Real-world</code>
				<h2>Experience</h2>
				<p>
					I have worked in these following companies to get the feel of how they
					work and how I should supposed to be worked there. It helped me alot
					about the development process, from <strong>code quality</strong> to{' '}
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
							{position}
							{' @ '}
							<Link href={link}>
                <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                  {company}
								</a>
							</Link>
						</h3>
						<code>{date}</code>
						{/* <h4>Main responsibilities:</h4> */}
						<h4>What i did:</h4>
						<ul className={styles.list}>
							{descriptions.map((each, i) => (
								<li key={i} className={styles.item}>
									{each}
								</li>
							))}
						</ul>
            {products.map((product, i) => (
              <p key={i} dangerouslySetInnerHTML={createMarkup(product)} />
            ))}
						<h4>Technologies:</h4>
						<ul className={styles.list}>
							{did.map((each, i) => (
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
