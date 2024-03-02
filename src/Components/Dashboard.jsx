import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div>
        <h2>Dashboard</h2>
        <p>Welcome to the dashboard</p>
        <Link to="/admins">Admins</Link>
        <Link to="/students">Students</Link>
        </div>
    );
}