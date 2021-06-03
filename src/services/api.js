import axios from "axios";

const api = axios.create({
  baseURL: "https://api.instantwebtools.net/v1",
});

api.interceptors.response.use(
  (res) => res.data,
  async (e) => {
    await Promise.reject(e.response.data);
  }
);

export const getPhotos = async (page) => {
  return await api.get(`/passenger?page=${page}&size=10`);
};
