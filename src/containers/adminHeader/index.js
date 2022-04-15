import { Tab, Tabs } from "@mui/material";
import { adminHeaderData } from "helpers/constants";
import React from "react";
import "./index.scss";

export default function AdminHeader({ tabValue, setTabValue }) {
  const handleTabChange = (e, index) => {
    setTabValue(adminHeaderData[index]);
  };
  return (
    <div className="header-container-wrapper">
      <div className="header-container">
        <Tabs value={tabValue.id} onChange={handleTabChange}>
          {adminHeaderData.map(({ title, path }, index) => (
            <Tab label={title} key={index} />
          ))}
        </Tabs>
      </div>
    </div>
  );
}
