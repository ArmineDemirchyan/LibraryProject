import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import "./index.scss";
import UserController from "controllers/user";
import EditIcon from "@mui/icons-material/Edit";
import Loading from "components/loading";
import BookListTableHeaderActions from "components/bookListTableHeaderActions";
import { IconButton } from "@mui/material";
import AdminBookEditModal from "components/adminBookEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminBookDeleteModal from "components/adminBookDeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { saveUserInfo } from "store/action-creators/userInfo";
import { userPersonalInfoSelector } from "store/selectors/userInfo";

export default function AdminBooksList() {
  const ADMIN_BOOKS_LIST_COLUMNS = [
    { headerName: "Book Id", field: "bookId", width: 60 },
    { headerName: "Անուն", field: "name", flex: 1 },
    { headerName: "հեղինակ", field: "author", flex: 1 },
    { headerName: "արտադրության տարեթիվ", field: "productionYear", flex: 1 },
    { headerName: "էջերի քանակ", field: "pagesCount", flex: 1 },
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
          <>
            <IconButton onClick={handleEdit(row.id)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDeleteBook(true, row.id)}>
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];
  const [editModalData, setEditModalData] = useState({
    isOpened: false,
    editableBook: {},
  });
  const [deleteModalData, setDeleteModalData] = useState({
    open: false,
    bookId: null,
  });
  const [loading, setLoading] = useState(true);
  const [bookList, setBookList] = useState([]);
  const dispatch = useDispatch();
  const userInfo = useSelector(userPersonalInfoSelector);
  const handleEdit = (id) => () =>
    setEditModalData({
      isOpened: true,
      editableBook: bookList.find((elem) => elem.bookId === id),
    });

  const handleDeleteBook = (payload, bookId) => () =>
    setDeleteModalData({ open: payload, bookId });

  const getBookList = async () => {
    setLoading(true);
    return await UserController.getBookList()
      .then((res) =>
        setBookList(res.data.data.map((elem) => ({ ...elem, id: elem.bookId })))
      )
      .finally(() => setLoading(false));
  };

  const handleCloseEditModal = (payload) => () => {
    setEditModalData({ isOpened: payload, editableBook: {} });
  };
  useEffect(() => {
    getBookList();
    dispatch(saveUserInfo({ ...userInfo, token: "a12323ad" }));
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div>
        {deleteModalData.open && (
          <AdminBookDeleteModal
            {...deleteModalData}
            onClose={handleDeleteBook}
            setLoading={setLoading}
            getBookList={getBookList}
          />
        )}
        <AdminBookEditModal onClose={handleCloseEditModal} {...editModalData} />
        <div className="bookList-table-wrapper">
          <BookListTableHeaderActions setBookList={setBookList} />
          <DataGrid rows={bookList} columns={ADMIN_BOOKS_LIST_COLUMNS} />
        </div>
      </div>
    </>
  );
}
