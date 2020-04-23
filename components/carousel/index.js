import React, { useContext, useEffect, useState } from 'react';
import getPhotos from '../../services/getPhotos';
import { SelectedUserContext } from '../../context/Store';
import styles from './styles';

const Menu = () => {
  const [selectedUser] = useContext(SelectedUserContext);
  const [photos, setPhotos] = useState(null);
  const [highlighPhoto, setHighlighPhoto] = useState(0);

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
      <style jsx>{styles}</style>
      {photos && (
        <img
          src={photos[highlighPhoto].url}
          alt={photos[highlighPhoto].title}
        />
      )}
      {photos &&
        photos.map((item, index) => (
          <img
            src={item.thumbnailUrl}
            onClick={() => setHighlighPhoto(index)}
            alt={item.title}
          />
        ))}
    </>
  );
};

export default Menu;
