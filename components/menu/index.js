import React, { useContext } from 'react';
import Link from 'next/link';
import styles from './styles';
import { SelectedUserContext } from '../../context/Store';

const Menu = () => {
  const [selectedUser] = useContext(SelectedUserContext);
  return (
    <>
      <style jsx>{styles}</style>
      <nav>
        <ul>
          <li>
            <Link href="/photos/[id]" as={`/photos/${selectedUser}`}>
              <a>Fotos</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/[id]" as={`/posts/${selectedUser}`}>
              <a>Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
