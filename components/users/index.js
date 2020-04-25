import React, { useContext, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';
import styles from './styles';
import getUsers from '../../services/getUsers';
import { UserContext, SelectedUserContext } from '../../context/Store';
import MENU from '../../assets/imgs/menu.svg';

const Users = () => {
  const router = useRouter();
  const [users, setUsers] = useContext(UserContext);
  const [, setSelectedUser] = useContext(SelectedUserContext);

  const toggleList = () => {
    if (window) {
      const menu = document.getElementById('user-menu');
      if (menu.classList.contains('opened-menu')) {
        menu.classList.remove('opened-menu');
      } else {
        menu.classList.add('opened-menu');
      }
    }
  };

  const selectUser = (id) => {
    setSelectedUser(id);
    const href = router.route;
    const as = router.route.replace('[id]', id);
    Router.push(href, as, { shallow: true });
    if (window) {
      if (window.innerWidth < 768) toggleList();
    }
  };

  useEffect(() => {
    if (!users) {
      getUsers().then((data) => {
        setUsers(data);
        setSelectedUser(data[0].id);
      });
    }
  }, []);

  return (
    <>
      <style jsx>{styles}</style>
      <button type="button" onClick={toggleList} className="mbl-btn">
        <img src={MENU} alt="menu de usuários" />
      </button>
      {users && (
        <ul id="user-menu">
          {users.map((item) => (
            <li key={uuid()}>
              <button
                type="button"
                onClick={() => selectUser(item.id)}
                className="user-btn"
              >
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
