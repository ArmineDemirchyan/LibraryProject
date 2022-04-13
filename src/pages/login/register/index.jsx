import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import AppController from "controllers/app";
import SignInController from "controllers/signIn";
import React, { useEffect, useState } from "react";
import styles from "./register.module.css";

const USER_TYPES = {
  TEACHER: "TEACHER",
  STUDENT: "STUDENT",
};

export function Register() {
  const [groupsDropdownData, setGroupsDropdownData] = useState([]);
  const [userType, setUserType] = useState(USER_TYPES.STUDENT);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    studentCardNumber: "",
    groupNumber: "",
    passportNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const {
    firstName,
    lastName,
    studentCardNumber,
    groupNumber,
    passportNumber,
    email,
    password,
    confirmPassword,
    phoneNumber,
  } = userInfo;

  useEffect(() => {
    getGroups().then((res) => {
      setGroupsDropdownData(res.data);
    });
  }, []);

  const getGroups = async () => {
    const response = await AppController.getGroups();
    return response;
  };

  const handleChange = (type) => (e) => {
    console.log(e);
    setUserInfo({ ...userInfo, [type]: e.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userExists = await AppController.getUserRole(userInfo.email);
    if (userExists.userExists) {
      return alert("The User Already Exists");
    }
    const response = await SignInController.register(userInfo);
    console.log(response);
  };
  return (
    <div className={styles.base_container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.header}>Գրանցում</div>
        <div className={styles.changeform}>
          <button
            className={styles.button}
            disabled={userType === USER_TYPES.STUDENT}
            type="button"
            onClick={() => setUserType(USER_TYPES.STUDENT)}
          >
            Ուսանող
          </button>
          <button
            className={styles.button}
            disabled={userType === USER_TYPES.TEACHER}
            type="button"
            onClick={() => setUserType(USER_TYPES.TEACHER)}
          >
            Դասախոս
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.image}>
            <img
              alt=""
              src="https://www.cdc.gov/healthyyouth/classroom-management/images/teacher-expectations.jpg"
            />
          </div>
          <div className={styles.from}>
            <div className={styles.flex}>
              <div className={styles.formgroup}>
                <label className={styles.label} htmlFor="name">
                  Անուն
                </label>
                <input
                  className={styles.input}
                  value={firstName}
                  onChange={handleChange("firstName")}
                  type="text"
                  name="username"
                />
              </div>
              <div className={styles.formgroup}>
                <label className={styles.label} htmlFor="lastname">
                  Ազգանուն
                </label>
                <input
                  className={styles.input}
                  value={lastName}
                  onChange={handleChange("lastName")}
                  type="text"
                  name="username"
                />
              </div>
            </div>
            {userType === USER_TYPES.STUDENT && (
              <div className={styles.formgroup}>
                <label className={styles.selectlabel} htmlFor="groupNumber">
                  Խմբի համար
                </label>
                <FormControl className={styles.select}>
                  <InputLabel id="demo-simple-select-label">
                    Խմբի համար
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={groupNumber}
                    label="Group Number"
                    onChange={handleChange("groupNumber")}
                  >
                    {groupsDropdownData?.map((elem, index) => (
                      <MenuItem key={index} value={elem.number}>
                        {" "}
                        {elem.number}{" "}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            )}

            <div className={styles.flex}>
              {userType === USER_TYPES.STUDENT ? (
                <div className={styles.formgroup}>
                  <label className={styles.label} htmlFor="studentCardNumber">
                    Ուսանողական տոմսի համար
                  </label>
                  <input
                    className={styles.input}
                    value={studentCardNumber}
                    onChange={handleChange("studentCardNumber")}
                    type="text"
                    name="username"
                    placeholder="Օրինակ`  Դ-128"
                  />
                </div>
              ) : (
                <div className={styles.formgroup}>
                  <label className={styles.label}>Անձնագրի համար</label>
                  <input
                    className={styles.input}
                    value={passportNumber}
                    onChange={handleChange("passportNumber")}
                    type="text"
                    name="username"
                    placeholder="Օրինակ Դ-128"
                  />
                </div>
              )}

              <div className={styles.formgroup}>
                <label className={styles.label} htmlFor="email">
                  Էլ․հասցե
                </label>
                <input
                  className={styles.input}
                  value={email}
                  onChange={handleChange("email")}
                  type="email"
                  name="username"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            <div className={styles.flex}>
              <div className={styles.formgroup}>
                <label className={styles.label} htmlFor="password">
                  Գաղտնաբառ
                </label>
                <input
                  className={styles.input}
                  value={password}
                  onChange={handleChange("password")}
                  type="password"
                  name="password"
                  placeholder="Գաղտնաբառ"
                />
              </div>
              <div className={styles.formgroup}>
                <label className={styles.label} htmlFor="confirmpassword">
                  Հաստատում
                </label>
                <input
                  className={styles.input}
                  value={confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  type="password"
                  name="confirmpassword"
                  placeholder="Կրկնի՛ր գաղտնաբառը"
                />
              </div>
            </div>
            <div className={styles.formgroup}>
              <label className={styles.label} htmlFor="phone">
                Հեռախոսահամար
              </label>
              <div>
                <label for="area_code" className={styles.phonecode}>
                  <img className={styles.flag} src="/img/flag.png" alt="Img" />
                  +374
                </label>
                <input
                  className={styles.phone}
                  value={phoneNumber}
                  onChange={handleChange("phoneNumber")}
                  type="text"
                  placeholder="8 նիշ"
                  name="phoneNumber"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.btn} type="submit">
            Ուղարկել հայտը
          </button>
        </div>
      </form>
    </div>
  );
}
