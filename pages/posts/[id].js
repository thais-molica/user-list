import React, { useContext, useEffect, useState } from 'react';
import Base from '../../components/base';
import getPosts from '../../services/getPosts';
import { SelectedUserContext, UserContext } from '../../context/Store';

const Index = () => {
  const [selectedUser] = useContext(SelectedUserContext);
  const [user] = useContext(UserContext);
  const [posts, setPosts] = useState(null);
  const selectedUserObj = user.find((item) => item.id === selectedUser);

  const updatePosts = () => {
    getPosts(selectedUser).then((data) => {
      setPosts(data);
    });
  };

  useEffect(() => {
    if (selectedUser) updatePosts();
  }, [selectedUser]);

  return (
    <>
      <Base>
        {selectedUserObj.name}
        Endereço:
        {selectedUserObj.address.street} - {selectedUserObj.address.suite}
        {selectedUserObj.address.city} - CEP: {selectedUserObj.address.zipcode}
        {posts && (
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
