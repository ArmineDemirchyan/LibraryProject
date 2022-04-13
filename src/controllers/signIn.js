import API from "service";

const { Hosts, Controllers, Methods } = require("helpers/constants");

const SignInController = {};

SignInController.login = async (body) => {
  const response = await API.POST(Hosts.BASE_URL, Methods.login, "", body);
  return response;
};

SignInController.adminLogin = async (body) => {
  return await API.POST(
    Hosts.PUBLIC_URL,
    Controllers.admin,
    Methods.adminLogin,
    body
  );
};

SignInController.register = async (data) => {
  const response = await API.POST(
    Hosts.BASE_URL,
    Controllers.register,
    "",
    data
  );
  return response || false;
};

export default SignInController;
