import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import BookMark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";

const UsersTable = ({
    users,
    handleDelete,
    selectedSort,
    onSort,
    handleToggleBookmark
}) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: {
            name: "Качества",
            component: (user) => <QualitiesList qualities={user.qualities} />
        },
        profession: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    id={user._id}
                    handleToggleBookmark={handleToggleBookmark}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    className="btn btn-danger "
                    onClick={() => handleDelete(user._id)}
                >
                    delete
                </button>
            )
        }
    };

    return (
        <Table

        >
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ data: users, columns }} />
        </Table>

    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggleBookmark: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
};

export default UsersTable;
