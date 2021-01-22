import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key=7ec219ece0bf5b3b1851e1958f62de1b81cf45b0&format=json',
});

export default api;