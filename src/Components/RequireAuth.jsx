import { useAuth } from '../Contexts/AuthContext';
import { Outlet,Navigate,useLocation } from 'react-router-dom';

export default function RequireAuth({allowedPermissions}) {
    const { auth } = useAuth();
    const location = useLocation();

    if(allowedPermissions===undefined){
        return (
            auth?.IsAuthenticated===true
            ? <Outlet/>
            : <Navigate to="/login" state={{ from: location }} replace />
        );
    }

    return (
        auth?.permissions?.find((permission) => allowedPermissions.includes(permission))
        ? <Outlet/>
        : auth?.IsAuthenticated===true
            ? <Navigate to="/unauthorized" state={{ from: location }} replace />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
       
}