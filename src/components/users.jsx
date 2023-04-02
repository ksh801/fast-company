/* eslint-disable multiline-ternary */
import React, { useState } from "react";
import paginate from "../utils/paginate";
import Pagination from "./pagination";
import SearchStatus from "./searchStatus";
import User from "./user";
import PropTypes from "prop-types";

const Users = ({ users, handleToggleBookmark, handleDelete }) => {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const renderTableHead = () => {
        return users.length !== 0 ? (
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th scope="col"></th>
            </tr>
        ) : (
            ""
        );
    };
    const userCrop = paginate(users, currentPage, pageSize);

    const renderTableBody = () => {
        return userCrop.map((user) => (
            <User
                key={user._id}
                user={user}
                handleDelete={handleDelete}
                handleToggleBookmark={handleToggleBookmark}
            />
        ));
    };

    return (
        <>
            <SearchStatus length={users.length} />
            <table className="table">
                <thead>{renderTableHead()}</thead>
                <tbody>{renderTableBody()}</tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                itemsCount={users.length}
                pageSize={pageSize}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    handleToggleBookmark: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default Users;
