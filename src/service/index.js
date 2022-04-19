import { request } from "./request";
const API = {};

const REQ = async (
  host,
  reqMethod,
  controller,
  method,
  data,
  query,
  headers
) => {
  try {
    const response = await request(
      host,
      reqMethod,
      controller,
      method,
      query,
      data,
      headers
    );
    return response;
  } catch (err) {
    return { hasError: true, errorMessage: err.message };
  }
};

API.PUT = async (host, controller, method, data, query, headers) => {
  return await REQ(host, "put", controller, method, data, query, headers);
};

API.GET = async (host, controller, method, query = {}, headers = {}) => {
  return await REQ(host, "get", controller, method, null, query, headers);
};

API.POST = async (host, controller, method, data, query, headers) => {
  return await REQ(host, "post", controller, method, data, query, headers);
};

export default API;
