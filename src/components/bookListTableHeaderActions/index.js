import { Button } from "@mui/material";
import AdminAddNewBookModal from "components/adminAddNewBook";
import React, { useState } from "react";

export default function BookListTableHeaderActions() {
  const [newBookModalOpened, setNewBookModalOpened] = useState(false);
  const handleOpenNewBookModal = (payload) => () => {
    setNewBookModalOpened(payload);
  };
  return (
    <div>
      <Button onClick={handleOpenNewBookModal(true)}>Ավելացնել Նոր Գիրք</Button>
      <AdminAddNewBookModal
        modalOpened={newBookModalOpened}
        onClose={handleOpenNewBookModal}
      />
    </div>
  );
}
