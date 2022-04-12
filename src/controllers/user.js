import { Controllers, Hosts } from "helpers/constants";
import API from "service";
const UserController = {};

UserController.getBookList = async () => {
  const response = await API.GET(Hosts.BASE_URL, Controllers.books, "");
  return response;
};

export default UserController;
