import { Button } from "@mui/material";
import AdminAddNewBookModal from "components/adminAddNewBook";
import AdminAddNewCategoryModal from "components/adminAddNewCategoryModal";
import React, { useState } from "react";

export default function BookListTableHeaderActions() {
  const [modals, setModals] = useState({
    newBookModal: false,
    newCategoryModal: false,
  });
  const handleOpenNewBookModal = (type, payload) => () => {
    setModals({ ...modals, [type]: payload });
  };

  return (
    <>
      <div className="bookList-headerActions-wrapper">
        <div>
          <Button onClick={handleOpenNewBookModal("newBookModal", true)}>
            Ավելացնել Նոր Գիրք
          </Button>
          <Button onClick={handleOpenNewBookModal("newCategoryModal", true)}>
            ավելացնել Նոր Կատեգորիա
          </Button>
        </div>
      </div>
      {modals.newBookModal && (
        <AdminAddNewBookModal
          modalOpened={modals.newBookModal}
          onClose={handleOpenNewBookModal}
        />
      )}
      {modals.newCategoryModal && (
        <AdminAddNewCategoryModal
          opened={modals.newCategoryModal}
          onClose={handleOpenNewBookModal}
        />
      )}
    </>
  );
}
