import { BASE_URL } from "../../helpers/constants";

const END_POINTS = {
    books:'books',
}
class BookService {
    async getBooks(data) {

        const url = `${BASE_URL}/${END_POINTS.books}`
        const response = await fetch(url, {
            method:'GET',
    
            headers: {
                "Content-Type": "application/json-patch+json",
                'Accept': 'text/plain',
                "charset":"UTF-8"
            }            
        });
        const responseData = await response.json();
        console.log(responseData);
    }
}
const bookService = new BookService;
export default bookService;
