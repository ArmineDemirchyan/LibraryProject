import { BASE_URL } from "../../constants";

const END_POINTS = {
    register:'register',
}

class IdentityService {
   async register(data) {

        const url = `${BASE_URL}/${END_POINTS.register}`
        const response = await fetch(url, {
            method:'POST',
            
            body:JSON.stringify(data),
            headers: {
                "Content-Type": "application/json-patch+json",
                'Accept':'text/plain',
                "charset":"UTF-8"
            }            
        });
        const responseData = await response.json();
        console.log(responseData);
    }
}
const identityService = new IdentityService;
export default identityService;





