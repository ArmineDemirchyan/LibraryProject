import useNavigationWithQueryParams from "helpers/hooks/useNavigationWithQueryParams";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import RoutesBuilder from "routes/index";
import routes from "routes/routes";
import { userPersonalInfoSelector } from "store/selectors/userInfo";
import "./App.css";

function App() {
  const user = useSelector(userPersonalInfoSelector);
  const navigate = useNavigationWithQueryParams();
  useEffect(() => {
    !user?.token && navigate(routes.login);
  }, []);
  return (
    <div id="main">
      <RoutesBuilder />
    </div>
  );
}

export default App;
