import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Loading from "components/loading";
import AdminController from "controllers/admin";
import React, { useEffect, useState } from "react";
import "./index.scss";

export default function AdminNewReservations() {
  const columns = [
    { headerName: "id", field: "id", flex: 1 },
    { headerName: "հայտի Ստեղծման Ամսաթիվ", field: "creationDate", flex: 1 },
    {
      headerName: "սպասվող վերցման ամսաթիվ",
      field: "expectedBorrowingDate",
      flex: 1,
    },
    {
      headerName: "սպասվող հանձնման ամսաթիվ",
      field: "expectedReturnDate",
      flex: 1,
    },
    {
      headerName: "Կարգավիճակ",
      field: "status",
      flex: 1,
    },
    {
      flex: 1,
      headerName: "book",
      field: "book",
      renderCell: ({ row }) => {
        return (
          <h5>
            {row.book.author} {row.book.name}
          </h5>
        );
      },
    },
    {
      flex: 1,
      headerName: "",
      field: "actions",
      type: "actions",
      renderCell: ({ row }) => {
        return (
          <Button onClick={handleConfirmReservation(row.id)}>հաստատել</Button>
        );
      },
    },
  ];

  const [loading, setLoading] = useState(true);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // setLoading(true);
    AdminController.getNewReservations()
      .then((res) => res.data && setReservations(res.data))
      .finally(() => setLoading(false));
  }, []);

  const handleConfirmReservation = (id) => {
    console.log(id);
  };

  return (
    <>
      {loading && <Loading />}
      <div className="table-wrapper">
        
        <DataGrid rows={reservations} columns={columns} />
      </div>
    </>
  );
}
