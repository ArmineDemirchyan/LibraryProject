import Loading from "components/loading";
import AppController from "controllers/app";
import SignInController from "controllers/signIn";
import { USER_NAVIGATION } from "helpers/constants";
import useNavigationWithQueryParams from "helpers/hooks/useNavigationWithQueryParams";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "store/action-creators/userInfo";
import styles from "./signin.module.css";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigationWithQueryParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [userLoginInfo, setUserLoginInfo] = useState({
    username: "",
    password: "",
  });
  const handleChange = (type) => (event) => {
    const value = event.target.value;
    setUserLoginInfo({ ...userLoginInfo, [type]: value });
  };
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (
      userLoginInfo.username.length > 0 &&
      userLoginInfo.password.length > 0
    ) {
      const userRole = await AppController.getUserRole(userLoginInfo.username);
      if (userRole?.userExists) {
      }
      const response =
        userRole.userRole === 1
          ? await SignInController.login(userLoginInfo)
          : await SignInController.adminLogin(userLoginInfo);
      if (response.data) {
        dispatch(saveUserInfo(response.data));
        navigate(USER_NAVIGATION[response.data.role]);
      }
    } else {
      return setErrorMessage("Please Fill all Fields");
    }
    setLoading(false);
  };
  return (
    <div className={styles.base_container}>
      {loading && <Loading />}
      <form onSubmit={handleSubmit}>
        <div className={styles.content}>
          <div className={styles.image}>
            <img className={styles.img} src="img/login.png" alt="" />
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
