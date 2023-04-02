import React from "react";
import PropTypes from "prop-types";

const Qality = ({ color, name, id }) => {
    return (
        <span key={id} className={`badge bg-${color} d-inline-flex m-1`}>
            {name}
        </span>
    );
};

Qality.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default Qality;
