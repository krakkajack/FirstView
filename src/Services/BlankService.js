import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/krakkajack/Eventcards",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getBlanks() {
    return apiClient.get("/events");
  },
  getBlank(id) {
    return apiClient.get("/events/" + id);
  }
};