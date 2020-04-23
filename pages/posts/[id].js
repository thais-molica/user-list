import React, { useContext, useEffect, useState } from 'react';
import Base from '../../components/base';
import getPosts from '../../services/getPosts';
import { SelectedUserContext } from '../../context/Store';

const Index = () => {
  const [selectedUser] = useContext(SelectedUserContext);
  const [posts, setPosts] = useState(null);

  const updatePosts = () => {
    getPosts(selectedUser).then((data) => {
      console.log(data)
      setPosts(data);
    });
  };

  useEffect(() => {
    if (selectedUser) updatePosts();
  }, [selectedUser]);

  return (
    <>
      <Base> posts </Base>
    </>
  );
};

export default Index;
