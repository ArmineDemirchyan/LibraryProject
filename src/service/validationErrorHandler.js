import { toast } from "react-toastify";

export const serializeErrorMessage = (error) => {
  console.log(error.response);
  if (error.response?.status === 401) {
    return (window.location.pathname = "/login");
  }
  if (error?.response?.data) {
    const { data } = error.response;
    if (data.errors) {
      Object.keys(data.errors).forEach((err) =>
        toast.error(data.errors[err][0])
      );
      return { data: { hasError: true } };
    }
    return {
      data: {
        hasError: true,
        errorMessage: error.response?.data?.errorMessage || error?.message,
      },
    };
  }
  return { data: { hasError: true } };
};
