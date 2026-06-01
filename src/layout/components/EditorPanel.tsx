export const EditorPanel = () => {
    return (
        <div>
            <h2>Editor Panel</h2>

            <h3>Create Post</h3>
            <input placeholder="Title" />
            <textarea placeholder="Write content..." />
            <button>Publish</button>

            <h3>Your Posts</h3>
            <ul>
                <li>
                    My First Post
                    <button>Edit</button>
                    <button>Delete</button>
                </li>
            </ul>
        </div>
    );
};