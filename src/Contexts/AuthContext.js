import { createContext,useContext, useState } from 'react';
import getJwtPayload from '../utilis/jwtHelper';

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(()=>{
        if(localStorage.getItem('token')){
            //console.log(localStorage.getItem('token'));
            let payload = getJwtPayload(localStorage.getItem('token'));
            //console.log("payload: ",payload.Permission);
            return {
                IsAuthenticated: true,
                permissions: payload.Permission,
            }
        }
        else{
            return {
                IsAuthenticated: false,
                permissions: [],
            }
        }
    });


    return (
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;