import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc",
                status: selectedSort.status === "active" ? "inactive" : "active"
            });
        } else {
            onSort({ path: item, order: "asc", status: "active" });
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        {selectedSort.status === "active" &&
                        columns[column].path === selectedSort.path
                            ? (
                                <i className="bi bi-caret-up-fill"></i>
                            )
                            : selectedSort.status === "inactive" &&
                          columns[column].path === selectedSort.path
                                ? (
                                    <i className="bi bi-caret-down-fill"></i>
                                )
                                : (
                                    ""
                                )}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
