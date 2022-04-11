import { BASE_URL } from "../../helpers/constants";

const END_POINTS = {
  register: "register",
};

class IdentityService {
  async register(data) {
    const url = `${BASE_URL}/${END_POINTS.register}`;
    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json-patch+json",
        Accept: "text/plain",
        charset: "UTF-8",
      },
    });
    const responseData = await response.json();
    console.log(responseData);
  }
}
const identityService = new IdentityService();
export default identityService;
