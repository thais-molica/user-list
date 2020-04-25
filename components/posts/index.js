import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import getPosts from '../../services/getPosts';
import { SelectedUserContext } from '../../context/Store';
import styles from './styles';
import LOADER from '../../assets/imgs/loader.svg';

const Posts = () => {
  const [selectedUser] = useContext(SelectedUserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState(null);

  const updatePosts = () => {
    setIsLoading(true);
    getPosts(selectedUser).then((data) => {
      setPosts(data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (selectedUser) updatePosts();
  }, [selectedUser]);

  return (
    <>
      <style jsx>{styles}</style>
      {isLoading && <img src={LOADER} alt="Carregando conteúdo" />}
      {posts && !isLoading && (
        <ul>
          {posts.map((item) => (
            <li key={uuid()}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
