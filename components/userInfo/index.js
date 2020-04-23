import React, { useContext } from 'react';
import { SelectedUserContext, UserContext } from '../../context/Store';

const Index = () => {
  const [selectedUser] = useContext(SelectedUserContext);
  const [user] = useContext(UserContext);

  if (user && selectedUser) {
    const selectedUserObj = user.find((item) => item.id === selectedUser);

    return (
      <>
        {selectedUserObj.name}
        Endereço:
        {selectedUserObj.address.street} - {selectedUserObj.address.suite}
        {selectedUserObj.address.city} - CEP: {selectedUserObj.address.zipcode}
      </>
    );
  }
  return null;
};

export default Index;
