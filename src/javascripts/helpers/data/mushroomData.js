import axios from "axios";
import apiKeys from '../../helpers/apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getMushrooms = () => axios.get('${baseUrls}/mushrooms.json');

export default {getMushrooms};
