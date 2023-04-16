import React from "react";
import PropTypes from "prop-types";
import Qality from "./qality";
const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((quality) => (
                <Qality
                    key={quality._id}
                    color={quality.color}
                    name={quality.name}
                    id={quality._id}
                />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default QualitiesList;
