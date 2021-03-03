import axios from "axios";

const API = {
  getAll(category) {
    return axios.get(`/api/nook/category/${category}`);
  },
  getVillagerNames(name) {
    return axios.get(`/api/nook/villager/${name}`);
  },

  getOne(category, name) {
    return axios.get(`/api/nook/category/${category}/${name}`);
  },

  // User methods
  // get user
  getOneUser: function (id) {
    let url = "/api/user/" + id;
    return axios.get(url);
  },
  // get users
  getAllUsers: function (id) {
    let url = "/api/user/";
    return axios.get(url);
  },
  // delete user
  // update user
  addUserItem: function (id, item) {
    let url = "api/item/" + id;
    return axios.post(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      params: item,
    });
  },
  // login user
  userLogin: function (user) {
    return axios.post("/api/auth/login", user);
  },
  userRegister: function (user) {
    return axios.post("/api/user", user);
  },
};

export default API;
