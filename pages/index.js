import { useContext, useEffect } from 'react';
import Router from 'next/router'
import getUsers from '../services/getUsers';
import { UserContext, SelectedUserContext } from '../context/Store';

const Index = () => {
  const [users, setUsers] = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useContext(SelectedUserContext);

  useEffect(() => {
    if (!users) {
      getUsers().then((data) => {
        setUsers(data);
        setSelectedUser(data[0].id);
        Router.push(`/photos/${data[0].id}`);
      });
    }
  }, []);

  if (selectedUser) Router.push(`/photos/${selectedUser}`);

  return null;
};

export default Index;
