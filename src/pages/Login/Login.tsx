import React, { useState, type ChangeEvent } from 'react'
import { useAuth, type Role } from '../../providers/AuthProvider'
import { useNavigate } from 'react-router'

export const Login = () => {
    const { login } = useAuth()

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        role: 'viewer' as Role,
    })

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: name === 'role' ? (value as Role) : value
        }))
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.username.trim()) {
            alert('Enter username');
            return;
        }

        login(formData.username, formData.role);
        navigate("/Dashboard")
    };
    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />

                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                </select>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}