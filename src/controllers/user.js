import { Controllers, Hosts, Methods } from "helpers/constants";
import API from "service";
import { setBooksList } from "store/action-creators/app";
import store from "store/app";
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

export default UserController;
