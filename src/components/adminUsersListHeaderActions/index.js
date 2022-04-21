import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Box,
} from "@mui/material";
import AdminAddNewGroupModal from "components/adminAddNewGroupModal";
import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { usersListSelector } from "store/selectors/app";

export default function AdminUsersListHeaderActions({ setUserList }) {
  const usersList = useSelector(usersListSelector, shallowEqual).data;
  const [modalsData, setModalsData] = useState({ addNewGroup: false });

  const handleModalChange = (id, payload) => () => {
    setModalsData({ ...modalsData, [id]: payload });
  };

  const handleFilterFieldChange = (id) => (e) => {
    const newData = usersList.filter((user) =>
      user[id].toUpperCase().includes(e.target.value.toUpperCase())
    );
    setUserList(newData);
  };

  const handleFilterByStatus = (e) => {
    setUserList(usersList.filter((user) => user.status === e.target.value));
  };

  return (
    <>
      <AdminAddNewGroupModal
        open={modalsData.addNewGroup}
        onCLose={handleModalChange}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <TextField
            label="Փնտրել Օգտատերի Անունով"
            onChange={handleFilterFieldChange("firstname")}
          />
          <TextField
            label="Փնտրել Օգտատերի Ազգանունով"
            onChange={handleFilterFieldChange("lastname")}
          />
          <Box sx={{ width: "13rem" }}>
            <FormControl fullWidth>
              <InputLabel>Փնտրել Օգտատերի Կարգավիճակով</InputLabel>
              <Select onChange={handleFilterByStatus}>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          <Button onClick={handleModalChange("addNewGroup", true)}>
            Ավելացնել Նոր Խմբի համար
          </Button>
        </div>
      </div>
    </>
  );
}
