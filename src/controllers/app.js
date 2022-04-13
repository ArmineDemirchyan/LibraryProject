import API from "service";
import { Hosts, Methods } from "helpers/constants";

const AppController = {};

AppController.getGroups = async () => {
  return await API.GET(Hosts.BASE_URL, Methods.groups, "");
};

AppController.getUserRole = async (email) => {
  return await (
    await API.POST(Hosts.PUBLIC_URL, Methods.getUserRole, "", { email })
  ).data;
};

export default AppController;
