import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import styles from './styles';

const Menu = ({ users }) => {
  const selectUser = (id) => {
    console.log(id);
  };

  return (
    <>
      <style jsx>{styles}</style>
      <ul>
        {users.map((item) => (
          <li key={uuid()}>
            <button type="button" onClick={() => selectUser(item.id)}>
              <strong>{item.name}</strong>
              <span>{item.email}</span>
              <span>{item.company}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;

Menu.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      company: PropTypes.string,
    }),
  ).isRequired,
};
