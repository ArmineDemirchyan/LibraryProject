import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { userPersonalInfoSelector } from "store/selectors/userInfo";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import UserController from "controllers/user";
import useNavigationWithQueryParams from "helpers/hooks/useNavigationWithQueryParams";
import React, { useState } from "react";

import routes from "routes/routes";
const UserSelect = ({setLoading}) => {
    
    const { displayName } = useSelector(userPersonalInfoSelector);
    console.log(displayName,'displayName');
    const navigate = useNavigationWithQueryParams();

    const handleLogOut = async () => {
        setLoading(true);
        const res = await UserController.logOut();
        if (res.hasError) return toast.error(res.errorMessage);
        navigate(routes.home);
        setLoading(false);
    }

    return (
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
    )
}
export default UserSelect;