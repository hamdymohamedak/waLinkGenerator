"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  let [text, setText] = useState("");
  let [phoneNum, setPhoneNum] = useState(null);

  let handleChange = (e) => {
    let textValue = e.target.value;
    setText(textValue);
  };

  let handlePhoneNum = (e) => {
    let textValue = e.target.value;
    setPhoneNum(textValue);
  };

  let copyToClipboard = () => {
    const textToCopy = `https://wa.me/${phoneNum}?text=${text
      .split(" ")
      .join("%20")}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Copied to clipboard: " + textToCopy);
      })
      .catch((err) => {
        alert("Copy to clipboard failed: " + err);
      });
  };

  return (
    <section className={styles.sec}>
      <div
        style={{ position: "absolute", zIndex: "-1", minHeight: "100vh" }}
        className={styles.background}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={styles.container}>
        <div className={styles.text}>
          WeLink Generator
          <div className={styles.Link}>
            <pre style={{ color: "black" }}>
              Your Link: https://wa.me/{phoneNum}?text=
              {text.split(" ").join("%20")}
            </pre>
            <button className={styles.copy} onClick={copyToClipboard}>
              Copy
            </button>
          </div>
        </div>
        <form action="#">
          <div className={styles["form-row"]}>
            <div className={styles["input-data"]}>
              <input onChange={handlePhoneNum} type="text" required />
              <div className={styles["underline"]} />
              <label htmlFor="phoneNumber">Phone Number With Key</label>
            </div>
          </div>
          <div className="form-row">
            <div className={styles["input-data textarea"]}>
              <textarea
                className={styles.textArea}
                onChange={handleChange}
                rows={8}
                cols={80}
                required
                defaultValue={""}
              />
              <br />
              <div className={styles.underline} />
              <label htmlFor="message">Write your message</label>
              <br />
              <div className={styles["form-row submit-btn"]}>
                <div className={styles["input-data"]}>
                  <div className="inner" />
                  <input
                    className={styles.copy}
                    type="button"
                    value="Copy"
                    onClick={copyToClipboard}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
