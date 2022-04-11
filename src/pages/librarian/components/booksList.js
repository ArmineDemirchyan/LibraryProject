import React, { useEffect } from "react";
import bookService from "../../../service/bookService";

function BooksList(){
    useEffect(()=>{
     const response = bookService.getBooks();
    },[]);
    return(
        <div>
            <div>filter goes here</div>
            <div>datatable goes here</div>
        </div>
    )
}
export default BooksList;