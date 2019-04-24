import axios from "axios";

const BASE_URL = "https://dickystokes-nc-news.herokuapp.com";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/topics`);
  return data.topics;
};

export const getArticles = async topic => {
  const { data } = await axios.get(
    `${BASE_URL}/api/articles${topic ? `?topic=${topic} ` : ""}`
  );
  return data.articles;
};

export const getArticle = async article_id => {
  console.log(article_id, "<<< api function");
  const { data } = await axios.get(`${BASE_URL}/api/articles/${article_id}`);
  return data.article;
};
export const getComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/api/articles/${article_id}/comments`
  );
  return data.comments;
};
