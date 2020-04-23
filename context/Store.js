import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext([]);
export const SelectedUserContext = React.createContext([]);

const Store = ({ children }) => {
  const [users, setUsers] = useState();
  const [selectedUser, setSelectedUser] = useState();

  return (
    <UserContext.Provider value={[users, setUsers]}>
      <SelectedUserContext.Provider value={[selectedUser, setSelectedUser]}>
        {children}
      </SelectedUserContext.Provider>
    </UserContext.Provider>
  );
};

export default Store;

Store.propTypes = {
  children: PropTypes.any.isRequired,
};
