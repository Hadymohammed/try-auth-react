import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import './App.css';
import Layout from './Layout';
import Admins from './Components/Admins';
import Students from './Components/Students';
import Unauthorized from './Components/Unauthorized';
import RequireAuth from './Components/RequireAuth';
import Permissions from './Permissions';
import Logout from './Components/Logout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* allow allow */}
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized/>} />

          {/* allow authirized only */}
          <Route element={<RequireAuth />}>
            <Route path="/logout" element={<Logout/>} />
          </Route >
          
          <Route element={<RequireAuth allowedPermissions={[Permissions.Admin.ViewById]}/>}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route >

          <Route element={<RequireAuth allowedPermissions={[Permissions.Admin.ViewAll]}/>}>
            <Route path="/admins/" element={<Admins />} />
          </Route>

          {/* he has not the role */}
          <Route element={<RequireAuth allowedPermissions={["NO"]}/>}>
            <Route path="/students/" element={<Students/>} />
          </Route >
          {/* path not found */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
