import axios from "axios";

const API = {
  getEmployees: function (param) {
    let param = param;
    let url = "https://acnhapi.com/v1a/" + param + "/?api_key=1811612a-677c-4647-892b-52759ab3167a"
    return axios.get(url);
  },
};

export default API;
