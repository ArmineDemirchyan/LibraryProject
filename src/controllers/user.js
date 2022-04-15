import { Controllers, Hosts, Methods } from "helpers/constants";
import API from "service";
import { setBooksList } from "store/action-creators/app";
import store from "store/app";
import { toast } from "react-toastify";
const UserController = {};

UserController.getBookList = async () => {
  const response = await API.GET(Hosts.BASE_URL, Controllers.books, "");
  store.dispatch(setBooksList(response.data.data));
  return response;
};

UserController.getBookCategories = async () => {
  const response = await API.GET(Hosts.BASE_URL, Methods.categories, "");
  return response.data;
};

UserController.ReserveNewBook = async (books) => {
  const responses = await Promise.all(
    books.map((book) =>
      API.POST(Hosts.BASE_URL, Methods.reservations, "", {
        bookId: book.bookId,
        borrowingDate: book.borrowingDate,
        returnDate: book.returnDate,
      })
    )
  );
  responses.map((res) =>
    res.hasError ? toast.error(res.errorMessage) : toast.success("Success")
  );
  return responses;
};

UserController.logOut = async () => {
  return await API.POST(Hosts.BASE_URL, Methods.logOut, "");
};

export default UserController;
