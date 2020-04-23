import React, { useContext, useEffect, useState } from 'react';
import Base from '../components/base';
import getPhotos from '../services/getPhotos';
import { SelectedUserContext } from '../context/Store';

const Index = () => {
  const [selectedUser] = useContext(SelectedUserContext);
  const [photos, setPhotos] = useState(null);

  const updatePhotos = () => {
    getPhotos(selectedUser).then((data) => {
      setPhotos(data);
    });
  };

  useEffect(() => {
    if (selectedUser) updatePhotos();
  }, [selectedUser]);

  return (
    <>
      <Base>
        {photos &&
          photos.map((item) => <img src={item.url} alt={item.title} />)}
      </Base>
    </>
  );
};

export default Index;
