import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const [counter, setCounter] = useState(users.length);

  const renderPhrase = (number) => {
    const lastDigit = number % 10;
    const lastSecondDigit = number % 100;
    return lastDigit >= 2 &&
      lastDigit <= 4 &&
      (lastSecondDigit <= 10 || lastSecondDigit >= 20)
      ? "человека тусанут с тобой  сегодня "
      : "человек тусанет с тобой сегодня";
  };

  const formatCount = () => {
    return counter === 0
      ? "Никто с тобой не тусанет"
      : counter + " " + renderPhrase(counter);
  };
  const getBadgeClasses = () => {
    let classesH1 = "badge fs-5 rounded-2 mt-1";
    classesH1 += counter === 0 ? " bg-danger" : " bg-primary ";
    return classesH1;
  };

  const handleDelete = (id) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== id));
    setCounter(counter - 1);
  };

  const renderTableHead = () => {
    return users.length !== 0 ? (
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col"></th>
      </tr>
    ) : (
      ""
    );
  };

  const renderTableBody = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((quality) => (
            <span
              key={quality._id}
              className={`badge bg-${quality.color} d-inline-flex m-1`}
            >
              {quality.name}
            </span>
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}/5.0</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(user._id)}
          >
            delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <h1 className={getBadgeClasses()}>{formatCount()} </h1>
      <table className="table">
        <thead>{renderTableHead()}</thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </>
  );
};

export default Users;
 