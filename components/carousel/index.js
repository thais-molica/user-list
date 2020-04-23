import React, { useContext, useEffect, useState } from 'react';
import getPhotos from '../../services/getPhotos';
import { SelectedUserContext } from '../../context/Store';
import styles from './styles';

const Menu = () => {
  const [selectedUser] = useContext(SelectedUserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState(null);
  const [highlighPhoto, setHighlighPhoto] = useState(0);

  const updatePhotos = () => {
    setIsLoading(true);
    getPhotos(selectedUser).then((data) => {
      setPhotos(data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (selectedUser) updatePhotos();
  }, [selectedUser]);

  return (
    <>
      <style jsx>{styles}</style>
      {photos && !isLoading && (
        <img
          src={photos[highlighPhoto].url}
          alt={photos[highlighPhoto].title}
        />
      )}
      {photos &&
        !isLoading &&
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
