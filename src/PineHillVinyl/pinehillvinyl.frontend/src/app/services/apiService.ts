import axios from 'axios';

const apiService = axios;


apiService.defaults.headers.common['Access-Control-Allow-Origin'] = '*';