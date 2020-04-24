import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import Users from '../users';
import Menu from '../menu';
import Container from '../container';
import UserInfo from '../userInfo';
import styles from './styles';

const Base = ({ children }) => {
  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <Header />
      <Container>
        <Users />
        <div className="main-content">
          <Menu />
          <UserInfo />
          {children}
        </div>
      </Container>
    </>
  );
};

export default Base;

Base.propTypes = {
  children: PropTypes.any.isRequired,
};
