import axios from 'axios';

export const PostsApi = {
  fetchPosts() {
    return axios.get('https://trycode.pw/c/2OBQ1.json').then(({ data }) => data);
  },
};
