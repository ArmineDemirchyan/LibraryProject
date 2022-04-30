import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import Loading from "components/loading";
import UserController from "controllers/user";
import useNavigationWithQueryParams from "helpers/hooks/useNavigationWithQueryParams";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import routes from "routes/routes";
import { userPersonalInfoSelector } from "store/selectors/userInfo";
import "./style.scss";
const User = () => {
  const [loading, setLoading] = useState(false);
  const { displayName } = useSelector(userPersonalInfoSelector);
  const navigate = useNavigationWithQueryParams();
  const handleLogOut = async () => {
    setLoading(true);
    const res = await UserController.logOut();
    if (res.hasError) return toast.error(res.errorMessage);
    navigate(routes.home);
  };
  return (
    <div className="main">
      {loading && <Loading />}
      
      <div className="header-wrapper">
        <div className="header">
        <nav>   
            <a href="#header">ԵԻՊՔ ԳՐԱԴԱՐԱՆ</a>
            <a href="#about">ԻՆՉՊԵ՞Ս ՕԳՏՎԵԼ</a>
            <Link to={routes.bookList}>ԳՐՔԵՐԻ ՑԱՆԿ</Link>
            <Link to={routes.myBooks}>ԻՄ ԳՐՔԵՐԸ</Link>
            <Box sx={{ minWidth: "10rem" }}>
              <FormControl fullWidth>
                <InputLabel>{displayName}</InputLabel>
                <Select variant="standard">
                  <MenuItem onClick={handleLogOut} className="menuitem">
                    դուրս գալ
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>    
        </nav>
        
        </div>
        <div className="info-wrapper">
          <div className="info">
            <div id="header" className="overlay">
              <h1>
                ԲԱՐԻ ԳԱԼՈՒՍՏ ԵԻՊՔ-Ի ԳՐԱԴԱՐԱՆ
                <span></span>
              </h1>
              <p>
                ԵԻՊՔ-ի օնլայն գրադարան, որտեղ կարող ես փնտրել,գտնել և ամրագրել
                քեզ անհրաժեշտ գրքերը։
              </p>
              <Link to="#about" className="btn">
                Կարդալ ավելին
              </Link>
            </div>
          </div>
          <div id="about" className="about">
            <div className="aboutright">
              <img alt="" src="img/libraryphoto.jpg" />
            </div>
            <div className="aboutleft">
              <h2>ԻՆՉՊԵ՞Ս ՕԳՏՎԵԼ</h2>
              <p>
                Շնորհավորում եմ դու արդեն մեր օնլայն գրադարանի անդամն ես:<br/>Գրքերին կարող ես ծանոթանալ <b>ԳՐՔԵՐԻ ՑԱՆԿ</b> բաժնում,որտեղ կարող ես ընտրել քո նախընտրած գիրքը և ամրագրել ցանկալի ժամանակահատվածի համար
              </p>
              
            </div>
          </div>
        </div>
        <footer></footer>
      </div>
    </div>
  );
};
export default User;

