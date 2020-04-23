import axios from 'axios';
import Utils from '../utils';

const getPosts = (id) => {
  axios.get(`${Utils.api}/posts?albumId=${id}`);
};

export default getPosts;
