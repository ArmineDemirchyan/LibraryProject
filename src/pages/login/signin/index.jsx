import React from "react";
import { useState } from "react";
import styles from "./signin.module.css";

export function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  console.log("Hello");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setMail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(mail, password);
  };
  return (
    <div className={styles.base_container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.header}>Մուտք</div>
        <div className={styles.content}>
          <div className={styles.image}>
            <img
              className={styles.img}
              src="https://wwalt=w.planstudyabroad.uniagents.com/images/login.png"
              alt=""
            />
          </div>
          <div className={styles.from}>
            <div className={styles.form_group}>
              <label className={styles.label} htmlFor="email">
                Էլ․հասցե
              </label>
              <input
                className={styles.input}
                onChange={handleEmailChange}
                value={mail}
                type="email"
                name="username"
                placeholder="example@gmail.com"
              />
            </div>
            <div className={styles.form_group}>
              <label className={styles.label} htmlFor="password">
                Գաղտնաբառ
              </label>
              <input
                className={styles.input}
                onChange={handlePasswordChange}
                value={password}
                type="password"
                name="password"
                placeholder="Գաղտնաբառ"
              />
              <a href="/register" className={styles.registerlink}>
                Գրանցում
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.btn} type="submit">
            Մուտք
          </button>
        </div>
      </form>
    </div>
  );
}
