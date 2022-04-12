import API from "service";

const { Hosts, Controllers } = require("helpers/constants");

const SignInController = {};

SignInController.login = async (body) => {
  const response = await API.POST(Hosts.BASE_URL, Controllers.login, "", body);
  return response;
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
