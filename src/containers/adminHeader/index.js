import { Button, Tab, Tabs } from "@mui/material";
import Loading from "components/loading";
import UserController from "controllers/user";
import {
  adminHeaderData,
  superAdminHeaderData,
  USER_TYPES,
} from "helpers/constants";
import useNavigationWithQueryParams from "helpers/hooks/useNavigationWithQueryParams";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import routes from "routes/routes";
import { userPersonalInfoSelector } from "store/selectors/userInfo";
import "./index.scss";

export default function AdminHeader({ tabValue, setTabValue }) {
  const navigate = useNavigationWithQueryParams();
  const [loading, setLoading] = useState(false);
  const user = useSelector(userPersonalInfoSelector);
  const handleTabChange = (e, index) => {
    setTabValue(
      (user.role === USER_TYPES.superAdmin
        ? superAdminHeaderData
        : adminHeaderData)[index]
    );
  };

  const handleLogOut = async () => {
    setLoading(true);
    await UserController.logOut();
    navigate(routes.home);
    setLoading(false);
  };

  return (
    <>
      {loading && <Loading />}
      <div className="header-container-wrapper">
        <div className="header-container">
          <div></div>
          <Tabs value={tabValue.id} onChange={handleTabChange}>
            {(user.role === USER_TYPES.superAdmin
              ? superAdminHeaderData
              : adminHeaderData
            ).map(({ title, path }, index) => (
              <Tab label={title} key={index} />
            ))}
          </Tabs>
          <div>
            <Button onClick={handleLogOut}>Դուրս Գալ</Button>
          </div>
        </div>
      </div>
    </>
  );
}
