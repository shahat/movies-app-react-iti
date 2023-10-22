import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "5d6eddce1c62c50ed73a4fd3b48efac0",
  },
});

export default instance;
