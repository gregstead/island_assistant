import axios from "axios";
const NOOKIPEDIA_API_KEY = "?api_key=1811612a-677c-4647-892b-52759ab3167a";

const API = {
  getAll: function (param) {
    let url;
    switch (param) {
      case "villagers": // New Horizons characters
        url = `https://api.nookipedia.com/${param}${NOOKIPEDIA_API_KEY}$game=NH`;
        return axios.get(url);
      case "fish": // Fish
      case "bugs": // Bugs
      case "sea": // Sea creatures
      case "art": // Art Works
      case "recipes": // Recipes
        url = `https://api.nookipedia.com/nh/${param}${NOOKIPEDIA_API_KEY}`;
        return axios.get(url);
      default:
        console.log(`Invalid parameter`);
    }
  },

  // getVillagerNames: function () {
  // const let url = `https://api.nookipedia.com/villagers?${NOOKIPEDIA_API_KEY}&excludedetails=true`;
  // return axios.get(url);
  getVillagerNames: function (name) {
    let url;
    url = `https://api.nookipedia.com/villagers${NOOKIPEDIA_API_KEY}&name=${name}`;
    return axios.get(url);
  },

  getOne: function (param, name) {
    let url;
    switch (param) {
      case "villagers": // New Horizons characters
        url = `https://api.nookipedia.com/${param}${NOOKIPEDIA_API_KEY}`;
        return axios.get(url);
      case "fish": // Fish
      case "bugs": // Bugs
      case "sea": // Sea creatures
      case "art": // Art Works
      case "recipes": // Recipes
        url = `https://api.nookipedia.com/nh/${param}/${name}${NOOKIPEDIA_API_KEY}`;
        return axios.get(url);
      default:
        console.log(`Invalid parameter`);
    }
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
