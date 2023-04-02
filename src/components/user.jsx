import React from "react";
import Qality from "./qality";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ user, handleDelete, handleToggleBookmark }) => {
    return (
        <>
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                    {user.qualities.map((quality) => (
                        <Qality
                            key={quality._id}
                            color={quality.color}
                            name={quality.name}
                            id={quality._id}
                        />
                    ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5.0</td>
                <td>
                    <BookMark
                        status={user.bookmark}
                        id={user._id}
                        handleToggleBookmark={handleToggleBookmark}
                    />
                </td>
                <td>
                    <button
                        className="btn btn-danger "
                        onClick={() => handleDelete(user._id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggleBookmark: PropTypes.func.isRequired
};

export default User;
