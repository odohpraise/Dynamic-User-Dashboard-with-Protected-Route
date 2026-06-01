import { useAuth } from "../../providers/AuthProvider";

export const Profile = () => {
    const { user } = useAuth();

    if (!user) {
        return <p>Please login</p>;
    }

    return (
        <div className="profile">
            <h2>Profile</h2>

            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Role:</strong> {user.role}</p>

            <button>Edit Profile</button>
        </div>
    );
};