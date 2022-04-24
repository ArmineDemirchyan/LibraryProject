import { Controllers, Hosts } from "helpers/constants";
import { toast } from "react-toastify";
import API from "service";

const AccountantController = {};

AccountantController.getBookCreationRequests = async () => {
  const response = await API.GET(
    Hosts.PUBLIC_URL,
    Controllers.BookCreationRequests,
    ""
  );
  if (response.data.hasError) {
    toast.error(response.data.errorMessage);
    return false;
  }
  return response.data;
};

export default AccountantController;
