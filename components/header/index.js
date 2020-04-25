import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Container from '../container';
import styles from './styles';

const Header = ({ text }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <header>
        <Container>
          <Link href="/">
            <a>{text}</a>
          </Link>
        </Container>
      </header>
    </>
  );
};

export default Header;

Header.defaultProps = {
  text: 'Logo',
};
Header.propTypes = {
  text: PropTypes.string,
};
