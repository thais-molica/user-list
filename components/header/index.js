import React from 'react';
import PropTypes from 'prop-types';
import Container from '../container';
import styles from './styles';

const Header = ({ text }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <header>
        <Container>
          <a href="/">{text}</a>
        </Container>
      </header>
    </>
  );
};

export default Header;

Header.defaultProps = {
  text: 'Teste Dev Frontend',
};
Header.propTypes = {
  text: PropTypes.string,
};
