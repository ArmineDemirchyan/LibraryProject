import { Tab, Tabs } from "@mui/material";
import { ACCOUNTANT_TABS } from "helpers/constants";
import React, { useState } from "react";
import "./index.scss";

export default function Accountant() {
  const [tabValue, setTabValue] = useState(ACCOUNTANT_TABS[0]);

  const handleTabChange = (e, index) => {
    setTabValue(ACCOUNTANT_TABS[index]);
  };
  return (
    <div>
      <div className="accountant-header-wrapper">
        <div className="accountant-header">
          <div></div>
          <Tabs value={tabValue.id} onChange={handleTabChange}>
            {ACCOUNTANT_TABS.map((tab) => (
              <Tab label={tab.title} key={tab.id} />
            ))}
          </Tabs>
          <div></div>
        </div>
      </div>
      <tabValue.Comp />
    </div>
  );
}
