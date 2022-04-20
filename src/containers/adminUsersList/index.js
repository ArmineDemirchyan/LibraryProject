import AdminController from "controllers/admin";
import React, { useEffect } from "react";

export default function AdminUsersList() {
  useEffect(() => {
    AdminController.getUsersList();
  }, []);
  return <div></div>;
}
