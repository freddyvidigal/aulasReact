import axios from 'axios';
// base da url: https://api.themoviedb.org/3/
//url da api: /movie/550?api_key=0e2fac409db2f56fa91952eb5c205160

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;