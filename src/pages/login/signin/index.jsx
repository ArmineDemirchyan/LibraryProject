import AppController from "controllers/app";
import SignInController from "controllers/signIn";
import { USER_TYPES } from "helpers/constants";
import useNavigationWithQueryParams from "helpers/hooks/useNavigationWithQueryParams";
import React from "react";
import { useState } from "react";
import styles from "./signin.module.css";

export function Login() {
  const navigate = useNavigationWithQueryParams();
  const [errorMessage, setErrorMessage] = useState("");
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
    if (
      userLoginInfo.username.length > 0 &&
      userLoginInfo.password.length > 0
    ) {
      const userRole = await AppController.getUserRole(userLoginInfo.username);
      if (userRole?.userExists) {
      }
      const response =
        userRole.userRole === USER_TYPES.student
          ? await SignInController.login(userLoginInfo)
          : await SignInController.adminLogin(userLoginInfo);
      if (response.data) {
        console.log(response);
        navigate("/user");
      }
    } else {
      return;
    }
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
          <p className="errorMessage">{errorMessage}</p>
          <button className={styles.btn} type="submit">
            Մուտք
          </button>
        </div>
      </form>
    </div>
  );
}
