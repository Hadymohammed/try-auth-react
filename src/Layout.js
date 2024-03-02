import { Outlet } from "react-router-dom";
import Logout from "./Components/Logout";
import { useAuth } from "./Contexts/AuthContext";

export default function Layout() {
    const {auth}=useAuth();

    const logout = auth.IsAuthenticated? <Logout /> : null;
    return (
        <div className="App">
            <div>
                <h1>Layout</h1>
                {logout}
            </div>
            <Outlet />
        </div>
    );
}