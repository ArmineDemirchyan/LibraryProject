import API from "../service/index";
import { Controllers, Hosts, Methods } from "helpers/constants";
import { toast } from "react-toastify";
const AdminController = {};

AdminController.getBookList = async () => {
  const response = await API.GET(Hosts.BASE_URL, Controllers.books, "");
  return response;
};

AdminController.CreateNewBook = async (body) => {
  const response = await API.POST(
    Hosts.PUBLIC_URL,
    Methods.BookCreationRequests,
    "",
    body
  );
  if (response.hasError) {
    toast.error(response.errorMessage);
    return false;
  }
  return response.data;
};

AdminController.editBook = async (body) => {
  const response = await API.PUT(
    Hosts.PUBLIC_URL,
    Controllers.admin,
    Controllers.books,
    body
  );
  if (response.hasError) {
    toast.error(response.errorMessage);
    return false;
  }
  return response.data;
};

AdminController.createNewCategory = (body) => {
  const response = API.POST(Hosts.PUBLIC_URL, Methods.categories, "", body);
  if (response.hasError) {
    toast.error(response.errorMessage);
    return false;
  }
  return response.data;
};

AdminController.getUsersList = async () => {
  const response = await API.POST(
    Hosts.PUBLIC_URL,
    Controllers.admin,
    `${Methods.users}/confirm`,
    { userId: 46 }
  );
  console.log(response);
};

export default AdminController;
