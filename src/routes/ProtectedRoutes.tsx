
import { useAuth } from '../providers/AuthProvider'
import { Navigate } from 'react-router'

export const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {

    const { user } = useAuth()


    if (!user) {
        return <Navigate to={"/Login"} />
    }
    return children;
}

export const AdminRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth()

    if (!user || user.role !== 'admin') {
        return <Navigate to={"/Login"} />
    }
    return children;
}
