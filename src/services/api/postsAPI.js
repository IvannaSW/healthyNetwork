import axios from "axios";

export const PostsApi = {
  fetchPosts() {
    return axios.get("/posts?_sort=id&_order=desc").then(({ data }) => data);
  },
  fetchPostData(id) {
    return axios.get("/posts?_id=" + id).then(({ data }) => data);
  },
  addPost(payload) {
    return axios.post("/posts", payload).then(({ data }) => data);
  },
};
