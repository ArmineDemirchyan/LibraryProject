import AdminController from "controllers/admin";
import React, { useEffect } from "react";

function BooksList() {
  useEffect(() => {
    const response = AdminController.getBooks();
  }, []);
  return <div></div>;
}
export default BooksList;
