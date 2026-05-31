import { useAuth } from '../../providers/AuthProvider'
import { Link, useNavigate } from 'react-router';

export const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate("/Login")
    }


    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h2 className="logo">MyApp</h2>
            </div>

            <ul className="navbar-links">
                <li className="user-info">
                    {user?.username} ({user?.role})
                </li>

                <li>
                    <Link to="/profile">Profile</Link>
                </li>

                {user?.role === 'admin' && (
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                )}
            </ul>

            <div className="navbar-right">
                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            </div>
        </nav>
    );
}
