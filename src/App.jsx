import React, { useState } from "react";
import api from "./api";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (id) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== id));
    };

    const handleToggleBookmark = (id) => {
        const newBookmarks = users.map((user) => {
            if (user._id === id) {
                return { ...user, bookmark: !user.bookmark };
            }
            return user;
        });
        setUsers(newBookmarks);
    };

    return (
        <Users
            users={users}
            handleToggleBookmark={handleToggleBookmark}
            handleDelete={handleDelete}
        />
    );
};

export default App;
