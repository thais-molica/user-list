import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Slider from 'react-slick';
import getPhotos from '../../services/getPhotos';
import { SelectedUserContext } from '../../context/Store';
import styles from './styles';
import LOADER from '../../assets/imgs/loader.svg';

const Carousel = () => {
  const [selectedUser] = useContext(SelectedUserContext);
  const [isLoading, setIsLoading] = useState(true);
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
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    touchThreshold: 20,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <style jsx>{styles}</style>
      {isLoading && <img src={LOADER} alt="Carregando conteúdo" />}
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
