import { toast } from "react-toastify";
import API from "service";

const { Hosts, Controllers, Methods } = require("helpers/constants");

const SignInController = {};

SignInController.login = async (body) => {
  const response = await API.POST(Hosts.BASE_URL, Methods.login, "", body);
  if (response.data.hasError) {
    toast.error(response.data.errorMessage);
    return false;
  }
  return response;
};

SignInController.adminLogin = async (body) => {
  const response = await API.POST(
    Hosts.PUBLIC_URL,
    Controllers.admin,
    Methods.adminLogin,
    body
  );
  if (response.data.hasError) {
    toast.error(response.data.errorMessage);
    return false;
  }
  return response;
};

SignInController.register = async (data) => {
  const response = await API.POST(
    Hosts.BASE_URL,
    Controllers.register,
    "",
    data
  );
  if (response.data.hasError) {
    toast.error(response.data.errorMessage);
    return false;
  }
  toast.success(response.data.message);
  return response;
};

export default SignInController;
