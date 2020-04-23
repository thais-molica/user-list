import axios from 'axios';
import Utils from '../utils';

async function getPhotosAsync(id) {
  try {
    const response = await axios.get(`${Utils.api}/photos?albumId=${id}`);
    const body = await response;
    return body;
  } catch (error) {
    return error;
  }
}

const getPhotos = (id) => {
  return getPhotosAsync(id).then((data) => {
    return data.data;
  });
};

export default getPhotos;
