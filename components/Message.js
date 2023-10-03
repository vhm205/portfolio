import styles from "../styles/Message.module.css";
import Button from "./Button";
import { useState } from "react";
import useOnScreen from "../utils/useOnScreen";
import axios from "axios";
import data from "../public/metadata.json";
import Img from "./Img";
import Popup from "./Popup";
import usePopup from "../utils/usePopup";

export default function Message() {
  const [ref, visible] = useOnScreen({ rootMargin: "-100px" });
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { popup, setPopup } = usePopup();

  function handleChange(e) {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleMessage(e) {
		e.preventDefault();
		console.log({ user });
		if (!user.name || !user.email || !user.message) {
			alert('Fill complete message!');
			return;
		}

		const channel = process.env.CHANNEL_NAME;
		const chatId = process.env.BOT_CHAT_ID;
		const token = process.env.BOT_TOKEN;
		const bot = `bot${chatId}:${token}`;

		axios
			.post(`https://api.telegram.org/${bot}/sendMessage`, {
				chat_id: channel,
				text: `Name: ${user.name}\nEmail: ${user.email}\nMessage: ${user.message}`,
			})
			.then((resp) => {
				console.log({ resp });
			})
			.catch(console.error.bind(this));

		setUser({ name: '', email: '', message: '' });
		setPopup(true);
	}

  return (
    <>
      <div
        className={`${styles.message} ${visible && "fadeBottom"}`}
        style={{ "--delay": 5 }}
        ref={ref}
        id="message"
      >
        <div className={styles.wrapper}>
          <code>&#128172; Something in mind?</code>
          <h2>Ping me</h2>
          <p>
            Feel free to ping me anytime and I would reply back in under <b>69 </b>
            minutes. I would be grateful if you are
            here to hire me. See you in my inbox &#9996;&#65039;.
          </p>
          <div className={styles.divider}>
            <form className={styles.form} onSubmit={handleMessage}>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="you@example.domain"
                required
              />
              <textarea
                name="message"
                value={user.message}
                onChange={handleChange}
                placeholder="Message"
                required
              ></textarea>
              <Button fill type="submit">
                Send it
              </Button>
            </form>
            <div className={styles.imageContainer}>
              <Img
                img={data.message.illustration}
                imgAlt={data.message.illustrationAlt}
                layout
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Popup active={popup}>Send successfully!</Popup>
    </>
  );
}
