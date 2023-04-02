/* eslint-disable no-multiple-empty-lines */
import React from "react";
import PropTypes from "prop-types";


const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        const lastDigit = number % 10;
        const lastSecondDigit = number % 100;
        if (length === 0) {
            return "Никто с тобой не тусанет";
        }
        return lastDigit >= 2 &&
            lastDigit <= 4 &&
            (lastSecondDigit <= 10 || lastSecondDigit >= 20)
            ? `${length} человека тусанут с тобой  сегодня`
            : `${length} человек тусанет с тобой сегодня`;
    };
    const getBadgeClasses = () => {
        let classesH1 = "badge fs-5 rounded-2 mt-1";
        classesH1 += length === 0 ? " bg-danger" : " bg-primary ";
        return classesH1;
    };

    return <h1 className={getBadgeClasses()}>{renderPhrase(length)} </h1>;
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
