import { toast } from "react-toastify";

export const serializeErrorMessage = (error) => {
  const { data } = error.response;
  if (data.errors) {
    Object.keys(data.errors).forEach((err) => toast.error(data.errors[err][0]));
    return { data: {} };
  }
  return {
    data: {
      hasError: true,
      errorMessage: error.response?.data?.errorMessage || error.message,
    },
  };
};
