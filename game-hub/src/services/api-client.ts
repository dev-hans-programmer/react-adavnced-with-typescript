import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.rawg.io/api',
   params: {
      key: '36576c8834df4bab8f183ee0b8d30cad',
   },
});
