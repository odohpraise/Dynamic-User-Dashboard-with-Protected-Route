import { BrowserRouter, Routes, Route } from 'react-router'
import { Login } from '../pages/Login/Login';
import { Profile } from '../pages/Profile/Profile';
import { Settings } from '../pages/Settings/Settings';
import Dashboard from '../pages/Dashboard/Dashboard';
import { AppLayout } from '../layout/AppLayout';
import { ProtectedRoutes } from './ProtectedRoutes';

export const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/Login' element={<Login />} />

                <Route path='/' element={<AppLayout />}>
                    <Route path='/Dashboard' element={
                        <ProtectedRoutes><Dashboard /></ProtectedRoutes>
                    } />

                    <Route path='/Profile' element={
                        <ProtectedRoutes>
                            <Profile />
                        </ProtectedRoutes>


                    } />

                    <Route path='/Settings' element={<Settings />} />

                </Route>

            </Routes>

        </BrowserRouter>
    )
}
