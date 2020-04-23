import React from 'react';
import Link from 'next/link';
import styles from './styles';

const Menu = () => {
  const id = 1;
  return (
    <>
      <style jsx>{styles}</style>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Fotos</a>
            </Link>
          </li>
          <li>
            <Link href={`/posts/:${id}`} as={`/posts/${id}`}>
              <a>Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
