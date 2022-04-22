import { Tab, Tabs } from "@mui/material";
import {
  adminHeaderData,
  superAdminHeaderData,
  USER_TYPES,
} from "helpers/constants";
import React from "react";
import { useSelector } from "react-redux";
import { userPersonalInfoSelector } from "store/selectors/userInfo";
import "./index.scss";

export default function AdminHeader({ tabValue, setTabValue }) {
  const user = useSelector(userPersonalInfoSelector);
  const handleTabChange = (e, index) => {
    setTabValue(
      (user.role === USER_TYPES.superAdmin
        ? superAdminHeaderData
        : adminHeaderData)[index]
    );
  };
  return (
    <div className="header-container-wrapper">
      <div className="header-container">
        <Tabs value={tabValue.id} onChange={handleTabChange}>
          {(user.role === USER_TYPES.superAdmin
            ? superAdminHeaderData
            : adminHeaderData
          ).map(({ title, path }, index) => (
            <Tab label={title} key={index} />
          ))}
        </Tabs>
      </div>
    </div>
  );
}
