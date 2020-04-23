import React, { useContext, useEffect, useState } from 'react';
import Base from '../../components/base';
import getPosts from '../../services/getPosts';
import { SelectedUserContext } from '../../context/Store';

const Index = () => {
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
      <Base>
        {posts && !isLoading && (
          <ul>
            {posts.map((item) => (
              <li>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        )}
      </Base>
    </>
  );
};

export default Index;
