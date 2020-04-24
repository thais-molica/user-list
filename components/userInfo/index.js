import React, { useContext } from 'react';
import { SelectedUserContext, UserContext } from '../../context/Store';
import styles from './styles';

const Index = () => {
  const [selectedUser] = useContext(SelectedUserContext);
  const [user] = useContext(UserContext);

  if (user && selectedUser) {
    const selectedUserObj = user.find((item) => item.id === selectedUser);

    return (
      <>
        <style jsx>{styles}</style>
        <h2>{selectedUserObj.name}</h2>
        <address>
          Endereço:
          <p>
            {selectedUserObj.address.street} - {selectedUserObj.address.suite}
          </p>
          <p>
            {selectedUserObj.address.city} - CEP:{' '}
            {selectedUserObj.address.zipcode}
          </p>
        </address>
      </>
    );
  }
  return null;
};

export default Index;
