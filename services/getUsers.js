import axios from 'axios';
import Utils from '../utils';

async function getUsersAsync() {
  try {
    const response = await axios.get(`${Utils.api}/users`);
    const body = await response;
    return body;
  } catch (error) {
    return error;
  }
}

const getUsers = () => {
  return getUsersAsync().then((data) => {
    return data.data;
  });
};

export default getUsers;
