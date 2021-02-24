import axios from "axios";
const NOOKIPEDIA_API_KEY = "/?api_key=1811612a-677c-4647-892b-52759ab3167a";
let url;

const API = {
  getAll: function (param) {
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
  getVillagerNames: function () {
    url = `https://api.nookipedia.com/villagers${NOOKIPEDIA_API_KEY}&excludedetails=true`;
    return axios.get(url);
  },
  getOne: function (param, name) {
    switch (param) {
      case "villagers": // New Horizons characters
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
  // get users
  // delete user
  // update user
  // login user
  userLogin: function (user) {
    return axios.post("/api/auth/login", user);
  },
};

export default API;
