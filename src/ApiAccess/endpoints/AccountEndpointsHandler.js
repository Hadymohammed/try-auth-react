import RequestBuilder, { POST } from '../RequestBuilder';
import StatusCodes from '../StatusCodes';

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/Account`;



export const LoginAction = async (username, password) => {
        const response = await fetch(`${baseUrl}/login`, RequestBuilder(POST, { username, password }));
        const body = await response.json();
        return body;
};
