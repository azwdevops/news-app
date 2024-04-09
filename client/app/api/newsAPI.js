import API from "./API";

export const getAllNews = async () => {
  try {
    const response = await API.get(`/news`);
    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const getSingleNews = async (id) => {
  try {
    const response = await API.get(`/news/single/${id}`);
    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getNewsByCategory = async (category, qty) => {
  const endpoint = qty
    ? `/news/category/${category}/${qty}`
    : `/news/category/${category}`;
  try {
    const response = await API.get(endpoint);
    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const searchPost = async (query) => {
  if (!query) {
    return {};
  }
  try {
    const response = await API.get(`/news/search/${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
