import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://api.github.com/users/",
});

export const get = async ({ url, config }) => {
  try {
    const { data } = await axiosApi.get(url, config);
    return data;
  } catch (error) {
    // todo: improve error handling
    console.log(error);
  }
};
