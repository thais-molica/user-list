import axios from 'axios';
import Utils from '../utils';

async function getPostsAsync(id) {
  try {
    const response = await axios.get(`${Utils.api}/posts?albumId=${id}`);
    const body = await response;
    return body;
  } catch (error) {
    return error;
  }
}

const getPosts = async (id) => {
  const data = await getPostsAsync(id);
  return data.data;
};

export default getPosts;
