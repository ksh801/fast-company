import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, id, handleToggleBookmark }) => {
    return (
        <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => handleToggleBookmark(id)}
        >
            <i
                className={
                    status
                        ? "bi p-3 m-2 bi-bookmark-fill"
                        : "bi p-3 m-2 bi-bookmark"
                }
            ></i>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    handleToggleBookmark: PropTypes.func.isRequired
};

export default BookMark;
