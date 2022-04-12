import API from "service";
import { Hosts, Methods } from "helpers/constants";

const AppController = {};

AppController.getGroups = async () => {
  return await API.GET(Hosts.BASE_URL, Methods.groups, "");
};

export default AppController;
