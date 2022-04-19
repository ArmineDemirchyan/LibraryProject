import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import "./index.scss";
import UserController from "controllers/user";
import EditIcon from "@mui/icons-material/Edit";
import Loading from "components/loading";
import BookListTableHeaderActions from "components/bookListTableHeaderActions";
import { IconButton } from "@mui/material";
import AdminBookEditModal from "components/adminBookEdit";

export default function AdminBooksList() {
  const ADMIN_BOOKS_LIST_COLUMNS = [
    { headerName: "bookId", field: "bookId", flex: 1 },
    { headerName: "Անուն", field: "name", flex: 1 },
    { headerName: "հեղինակ", field: "author", flex: 1 },
    { headerName: "արտադրության տարեթիվ", field: "productionYear", flex: 1 },
    { headerName: "էջերի քանակ", field: "էջերի քանակ", flex: 1 },
    { headerName: "նկարագրությունը", field: "description", flex: 1 },
    { headerName: "Գրքերի քանակ", field: "totalCount", flex: 1 },
    {
      headerName: "Հասանելի պատվիրելու համար",
      field: "availableForBorrowingCount",
      flex: 1,
    },
    {
      headerName: "Հասանելի Գրադարանում Կարդալու համար",
      field: "availableForUsingInLibraryCount",
      flex: 1,
    },
    {
      flex: 1,
      field: "actions",
      type: "actions",
      renderCell: (row) => {
        return (
          <IconButton onClick={handleEdit(row.id)}>
            <EditIcon />
          </IconButton>
        );
      },
    },
  ];
  const [editModalData, setEditModalData] = useState({
    isOpened: false,
    editableBook: {},
  });
  const [loading, setLoading] = useState(true);
  const [bookList, setBookList] = useState([]);

  const handleEdit = (id) => () =>
    setEditModalData({
      isOpened: true,
      editableBook: bookList.find((elem) => elem.bookId === id),
    });

  const getBookList = async () => {
    return await UserController.getBookList();
  };

  const handleCloseEditModal = (payload) => () => {
    setEditModalData({ isOpened: payload, editableBook: {} });
  };
  useEffect(() => {
    getBookList()
      .then((res) =>
        setBookList(res.data.data.map((elem) => ({ ...elem, id: elem.bookId })))
      )
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div>
        <AdminBookEditModal onClose={handleCloseEditModal} {...editModalData} />
        <div className="bookList-table-wrapper">
          <DataGrid
            rows={bookList}
            columns={ADMIN_BOOKS_LIST_COLUMNS}
            components={{ Header: BookListTableHeaderActions }}
          />
        </div>
      </div>
    </>
  );
}
