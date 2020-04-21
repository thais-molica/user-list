import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import Menu from '../menu';
import Container from '../container';
import styles from './styles';

const Base = ({ children }) => {
  const users = [
    {
      id: 1,
      name: 'name',
      email: 'email',
      company: 'company',
    },
    {
      id: 2,
      name: 'name 2',
      email: 'email 2',
      company: 'company 2',
    },
  ];
  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <Header />
      <Container>
        <Menu users={users} />
      </Container>
      {children}
    </>
  );
};

export default Base;

Base.propTypes = {
  children: PropTypes.any.isRequired,
};
