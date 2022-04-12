import SignInController from "controllers/signIn";
import useNavigationWithQueryParams from "helpers/hooks/useNavigationWithQueryParams";
import React from "react";
import { useState } from "react";
import styles from "./signin.module.css";

export function Login() {
  const navigate = useNavigationWithQueryParams();
  const [userLoginInfo, setUserLoginInfo] = useState({
    username: "",
    password: "",
  });
  const handleChange = (type) => (event) => {
    const value = event.target.value;
    setUserLoginInfo({ ...userLoginInfo, [type]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await SignInController.login(userLoginInfo);
    if (response) {
      console.log(response);
      navigate("/user");
    }
  };
  return (
    
    <div className={styles.base_container}>
      <form onSubmit={handleSubmit}>
        
        <div className={styles.content}>
          <div className={styles.image}>
            <img
              className={styles.img}
              src="img/login.png"
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
                onChange={handleChange("username")}
                value={userLoginInfo.mail}
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
                onChange={handleChange("password")}
                value={userLoginInfo.password}
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
