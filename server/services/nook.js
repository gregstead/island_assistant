const axios = require('axios');
const myKey = process.env.NOOK_API_KEY;
const NOOKIPEDIA_API_KEY = '?api_key=' + myKey;

const API = {
  getAllByCategory (category) {
    let url;
    switch (category) {
      case 'villagers': // New Horizons characters
        url = `https://api.nookipedia.com/${category}${NOOKIPEDIA_API_KEY}$game=NH`;
        return axios.get(url);
      case 'fish': // Fish
      case 'bugs': // Bugs
      case 'sea': // Sea creatures
      case 'art': // Art Works
      case 'recipes': // Recipes
        url = `https://api.nookipedia.com/nh/${category}${NOOKIPEDIA_API_KEY}`;
        return axios.get(url);
      default:
        throw new Error('Invalid category');
    }
  },
  getVillagerByName: function (name) {
    const url = `https://api.nookipedia.com/villagers${NOOKIPEDIA_API_KEY}&name=${name}&nhdetails=true`;
    return axios.get(url);
  },

  getOneByCategory: function (category, name) {
    let url;
    switch (category) {
      case 'villagers': // New Horizons characters
        url = `https://api.nookipedia.com/${category}${NOOKIPEDIA_API_KEY}`;
        return axios.get(url);
      case 'fish': // Fish
      case 'bugs': // Bugs
      case 'sea': // Sea creatures
      case 'art': // Art Works
      case 'recipes': // Recipes
        url = `https://api.nookipedia.com/nh/${category}/${name}${NOOKIPEDIA_API_KEY}`;
        return axios.get(url);
      default:
        throw new Error('Invalid category');
    }
  }
};

module.exports = API;
