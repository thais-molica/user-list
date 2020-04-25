import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Slider from 'react-slick';
import getPhotos from '../../services/getPhotos';
import { SelectedUserContext } from '../../context/Store';
import styles from './styles';

const Carousel = () => {
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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    touchThreshold: 20,
  };

  return (
    <>
      <style jsx>{styles}</style>
      {photos && !isLoading && (
        <img
          src={photos[highlighPhoto].url}
          alt={photos[highlighPhoto].title}
          className="highlight-img"
        />
      )}
      {photos && !isLoading && (
        <Slider {...settings}>
          {photos.map((item, index) => (
            <button
              type="button"
              onClick={() => setHighlighPhoto(index)}
              key={uuid()}
            >
              <img src={item.thumbnailUrl} alt={item.title} />
            </button>
          ))}
        </Slider>
      )}
    </>
  );
};

export default Carousel;
