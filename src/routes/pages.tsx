import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Login } from '../pages/Login/Login';
import { Profile } from '../pages/Profile/Profile';
import { Settings } from '../pages/Settings/Settings';
import Dashboard from '../pages/Dashboard/Dashboard';
import { AppLayout } from '../layout/AppLayout';
import { ProtectedRoutes, AdminRoute } from './ProtectedRoutes';

export const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>


                <Route path="/" element={<Navigate to="/login" />} />


                <Route path="/login" element={<Login />} />


                <Route path="/" element={<AppLayout />}>

                    <Route path="dashboard" element={
                        <ProtectedRoutes>
                            <Dashboard />
                        </ProtectedRoutes>
                    } />

                    <Route path="/profile" element={
                        <ProtectedRoutes>
                            <Profile />
                        </ProtectedRoutes>
                    } />

                    <Route path="/Settings" element={
                        <AdminRoute>
                            <Settings />
                        </AdminRoute>
                    } />

                </Route>

            </Routes>
        </BrowserRouter>
    );
};