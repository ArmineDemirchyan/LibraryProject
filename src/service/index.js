import axios from "axios";
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
  const response = await request(
    host,
    reqMethod,
    controller,
    method,
    data,
    headers
  );
  return response;
};

API.GET = async (host, controller, method, query = {}, headers = {}) => {
  return await REQ(host, "get", controller, method, null, query, headers);
};

API.POST = async (host, controller, method, data, query, headers) => {};
