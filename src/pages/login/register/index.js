import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import AppController from "controllers/app";
import SignInController from "controllers/signIn";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { toast } from "react-toastify";

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
    setUserInfo({ ...userInfo, [type]: e.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userExists = await AppController.getUserRole(userInfo.email);
    if (userExists.userExists) {
      return toast.error("The User Already Exists");
    }
    const response = await SignInController.register(userInfo);
    console.log(response);
  };
  return (
    <div className="base_container">
      <form onSubmit={handleSubmit}>
        <div className="header">Գրանցում</div>
        <div className="changeform">
          <button
            className="button"
            disabled={userType === USER_TYPES.STUDENT}
            type="button"
            onClick={() => setUserType(USER_TYPES.STUDENT)}
          >
            Ուսանող
          </button>
          <button
            className="button"
            disabled={userType === USER_TYPES.TEACHER}
            type="button"
            onClick={() => setUserType(USER_TYPES.TEACHER)}
          >
            Դասախոս
          </button>
        </div>
        <div className="content">
          {/* <div className="image">
            <img
              alt=""
              src="https://www.cdc.gov/healthyyouth/classroom-management/images/teacher-expectations.jpg"
            />
          </div> */}
          <div className="form">
            <div className="flex">
              <div className="formgroup">
                <label className="label" htmlFor="name">
                  Անուն
                </label>
                <input
                  className="input"
                  value={firstName}
                  onChange={handleChange("firstName")}
                  type="text"
                  name="username"
                />
              </div>
              <div className="formgroup">
                <label className="label" htmlFor="lastname">
                  Ազգանուն
                </label>
                <input
                  className="input"
                  value={lastName}
                  onChange={handleChange("lastName")}
                  type="text"
                  name="username"
                />
              </div>
            </div>
            {userType === USER_TYPES.STUDENT && (
              <div className="formgroup">
                <FormControl className="select">
                  <InputLabel className="select-label" id="demo-simple-select-label">
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

            <div className="flex">
              {userType === USER_TYPES.STUDENT ? (
                <div className="formgroup">
                  <label className="label" htmlFor="studentCardNumber">
                    Ուսանողական տոմսի համար
                  </label>
                  <input
                    className="input"
                    value={studentCardNumber}
                    onChange={handleChange("studentCardNumber")}
                    type="text"
                    name="username"
                    placeholder="Օրինակ`  Դ-128"
                  />
                </div>
              ) : (
                <div className="formgroup">
                  <label className="label">Անձնագրի համար</label>
                  <input
                    className="input"
                    value={passportNumber}
                    onChange={handleChange("passportNumber")}
                    type="text"
                    name="username"
                    placeholder="Օրինակ Դ-128"
                  />
                </div>
              )}

              <div className="formgroup">
                <label className="label" htmlFor="email">
                  Էլ․հասցե
                </label>
                <input
                  className="input"
                  value={email}
                  onChange={handleChange("email")}
                  type="email"
                  name="username"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            <div className="flex">
              <div className="formgroup">
                <label className="label" htmlFor="password">
                  Գաղտնաբառ
                </label>
                <input
                  className="input"
                  value={password}
                  onChange={handleChange("password")}
                  type="password"
                  name="password"
                  placeholder="Գաղտնաբառ"
                />
              </div>
              <div className="formgroup">
                <label className="label" htmlFor="confirmpassword">
                  Հաստատում
                </label>
                <input
                  className="input"
                  value={confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  type="password"
                  name="confirmpassword"
                  placeholder="Կրկնի՛ր գաղտնաբառը"
                />
              </div>
            </div>
            <div className="formgroup">
              <label className="label" htmlFor="phone">
                Հեռախոսահամար
              </label>
              <div>
                <label for="area_code" className="phonecode">
                  <img className="flag" src="/img/flag.png" alt="Img" />
                  +374
                </label>
                <input
                  className="phone"
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
        <div className="footer">
          <button className="btton" type="submit">
            Ուղարկել հայտը
          </button>
        </div>
      </form>
    </div>
  );
}
