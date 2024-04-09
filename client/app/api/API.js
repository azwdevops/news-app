import axios from "axios";

export default axios.create({
  baseURL: `http://172.16.0.104:5000/api`,
});
