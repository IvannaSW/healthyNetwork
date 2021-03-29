import axios from "axios";

export const PostsApi = {
  fetchPosts() {
    return axios.get("/posts").then(({ data }) => data);
  },
  fetchPostData(id) {
    return axios.get("/posts?_id=" + id).then(({ data }) => data);
  },
};
