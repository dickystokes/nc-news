import axios from "axios";

const BASE_URL = "https://dickystokes-nc-news.herokuapp.com";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/topics`);
  return data.topics;
};
