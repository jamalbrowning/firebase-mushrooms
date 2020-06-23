import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getMycologists = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mycologists.json`)
    .then((response) => {
      const mycologistsObjects = response.data;
      const mycologists = [];
      Object.keys(mycologistsObjects).forEach((mycologistsId) => {
        mycologistsObjects[mycologistsId].id = mycologistsId;
        mycologists.push(mycologistsObjects[mycologistsId]);
      });
      resolve(mycologists);
    })
    .catch((err) => reject(err));
});

const getMycologistById = (mycologistId) => axios.get(`${baseUrl}/mycologists/${mycologistId}.json`);

export default { getMycologists, getMycologistById };
