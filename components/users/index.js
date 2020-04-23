import React, { useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './styles';
import getUsers from '../../services/getUsers';
import { UserContext, SelectedUserContext } from '../../context/Store';

const Users = () => {
  const [users, setUsers] = useContext(UserContext);
  const [, setSelectedUser] = useContext(SelectedUserContext);
  const selectUser = (id) => {
    setSelectedUser(id);
  };

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setSelectedUser(data[0].id);
    });
  }, []);

  return (
    <>
      <style jsx>{styles}</style>
      {users && (
        <ul>
          {users.map((item) => (
            <li key={uuid()}>
              <button type="button" onClick={() => selectUser(item.id)}>
                <strong>{item.name}</strong>
                <span>{item.email}</span>
                <span>{item.company.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Users;
