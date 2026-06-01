import { useState } from "react";

export const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="settings">
            <h2>Settings</h2>

            <label>
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                Enable Dark Mode
            </label>

            <button>Save</button>
        </div>
    );
};