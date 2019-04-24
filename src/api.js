import axios from "axios";

const BASE_URL = "https://dickystokes-nc-news.herokuapp.com";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/topics`);
  return data.topics;
};

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/articles`);
  return data.articles;
};
export const getComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/api/articles/${article_id}/comments`
  );
  return data.comments;
};
