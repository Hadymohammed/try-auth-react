export default function RequestBuilder(method,body,token) {
    var request= {
      method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'x-api-key': process.env.REACT_APP_API_KEY,
        },
      withCredentials: true,
      body: JSON.stringify(body),
    }
    return request;
}
export const POST = 'POST';
export const GET = 'GET';
export const PUT = 'PUT';
export const DELETE = 'DELETE';
export const PATCH = 'PATCH';
