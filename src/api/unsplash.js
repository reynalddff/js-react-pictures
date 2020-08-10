import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Fz9bgnTz4JAKfkdpnAGoIUhbiS7yy1cd7EA7QeUrYlU",
  },
});
