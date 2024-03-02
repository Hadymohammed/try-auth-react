//import jwt from 'jsonwebtoken';
import {jwtDecode} from 'jwt-decode';
export default function getJwtPayload(token){
    let payload = jwtDecode(token);
    return payload;
};