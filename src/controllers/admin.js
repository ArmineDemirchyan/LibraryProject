import API from "../service/index";
import { Controllers, Hosts } from "helpers/constants";
const AdminController = {};

AdminController.getBookList = async () => {
  const response = await API.GET(Hosts.BASE_URL, Controllers.books, "");
  return response;
};

export default AdminController;
