import React, { useEffect } from "react";
import { List,Datagrid,TextField } from "react-admin";
import bookService from "../../../service/bookService";

function BooksList(){
    useEffect(()=>{
     const response = bookService.getBooks();
    },[]);
    return(
        <div></div>
    )
}
export default BooksList;