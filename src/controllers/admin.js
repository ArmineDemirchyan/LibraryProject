import API from "../service/index";
import { Controllers, Hosts, Methods } from "helpers/constants";
import { toast } from "react-toastify";
const AdminController = {};

AdminController.getBookList = async () => {
  const response = await API.GET(Hosts.BASE_URL, Controllers.books, "");
  if (response.data.hasError) {
    toast.error(response.data.errorMessage);
    return false;
  }
  return response;
};

AdminController.CreateNewBook = async (body) => {
  const response = await API.POST(
    Hosts.PUBLIC_URL,
    Methods.BookCreationRequests,
    "",
    body
  );
  if (response.data.hasError) {
    toast.error(response.data.errorMessage);
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
  if (response.data.hasError) {
    toast.error(response.data.errorMessage);
    return false;
  }
  return response.data;
};

AdminController.createNewCategory = (body) => {
  const response = API.POST(Hosts.PUBLIC_URL, Methods.categories, "", body);
  if (response.data.hasError) {
    toast.error(response.data.errorMessage);
    return false;
  }
  return response.data;
};

AdminController.getUsersList = async () => {
  const response = await API.GET(
    Hosts.PUBLIC_URL,
    Controllers.admin,
    Methods.users
  );
  if (response.data.hasError) {
    toast.error(response.data.errorMessage);
    return false;
  }
  return response.data;
};

AdminController.confirmUser = async (body) => {
  const response = await API.POST(
    Hosts.PUBLIC_URL,
    Controllers.admin,
    Methods.confirmUser,
    body
  );
  if (response.data?.hasError) {
    toast.error(response.data.errorMessage);
    return false;
  }
  toast.success("Success");
  await AdminController.getUsersList();
  return response?.data;
};

AdminController.ChangeUserStatus = async (body) => {
  const response = await API.POST(
    Hosts.PUBLIC_URL,
    Controllers.admin,
    Methods.changeUserStatus,
    body
  );
  if (response.data?.hasError) {
    toast.error(response.data.errorMessage);
    return false;
  }
  toast.success("Success");
  await AdminController.getUsersList();
  return response?.data;
};

export default AdminController;
