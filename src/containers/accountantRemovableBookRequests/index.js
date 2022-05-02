import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AccountantBookRequestsListTableHeaderActions from "components/accountantBookRequestsListTableHeaderActions";
import Loading from "components/loading";
import AccountantController from "controllers/accountant";
import React, { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { bookDeletionRequestsListSelector } from "store/selectors/app";
import "./index.scss";

export default function AccountantRemovableBookRequests() {
  const columns = [
    { field: "id", headerName: "Id", width: 60 },
    { field: "bookName", headerName: "Գրքի Անուն", flex: 1 },
    { field: "bookAuthor", headerName: "Հեղինակ", flex: 1 },
    { field: "count", headerName: "Քանակ", width: 120 },
    { field: "requestStatus", headerName: "Կարգավիճակ", width: 120 },
    { field: "note", headerName: "Նշումներ", flex: 1 },
    { field: "deletionReason", headerName: "Հեռացման Պատճառը", flex: 1 },
    {
      field: "actions",
      type: "actions",
      headerName: "",
      flex: 1,
      renderCell: ({ row }) =>
        row.requestStatus === "Pending" && (
          <>
            <Button
            // onClick={handelConfirmRequestModalChange(row.id, true, "confirm")}
            >
              հաստատել
            </Button>
            <Button
            // onClick={handelConfirmRequestModalChange(row.id, true, "reject")}
            >
              Չեղարկել
            </Button>
          </>
        ),
    },
  ];
  const allBookDeletionRequest = useSelector(
    bookDeletionRequestsListSelector,
    shallowEqual
  ).data;
  const [loading, setLoading] = useState(false);
  const [bookDeletionRequests, setBookDeletionRequests] = useState([]);

  useEffect(() => {
    getBookDeletionRequests();
  }, []);

  const getBookDeletionRequests = async () => {
    setLoading(true);
    await AccountantController.getBookDeletionRequests()
      .then((res) => setBookDeletionRequests(res.data))
      .finally(() => setLoading(false));
  };

  console.log(allBookDeletionRequest);

  return (
    <>
      {loading && <Loading />}
      <div className="table-wrapper">
        <AccountantBookRequestsListTableHeaderActions
          setBookCreationRequests={setBookDeletionRequests}
          bookCreationRequests={allBookDeletionRequest}
        />
        <DataGrid columns={columns} rows={bookDeletionRequests} />
      </div>
    </>
  );
}
