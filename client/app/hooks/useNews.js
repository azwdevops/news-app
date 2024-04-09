import { useEffect, useState } from "react";
import { getAllNews } from "@/app/api/newsAPI";

export default useNews = () => {
  const [featuredNews, setFeaturedNews] = useState({});
  const [breakingNews, setBreakingNews] = useState([]);
  const [politicalNews, setPoliticalNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  const qty = 5;

  const [loading, setLoading] = useState(false);

  const filterFeatured = (data) => {
    return [...data].filter((item) => item.featured === "on").reverse()[0];
  };

  const filterByCategory = (data, category) => {
    const result = [...data]
      .filter((item) => item.category === category)
      .reverse()
      .splice(0, qty);

    if (result.length) {
      result.push({ type: "viewMore", category: category, id: category });
    }

    return result;
  };

  useEffect(() => {
    const filterMultipleNews = async () => {
      setLoading(true);
      const allNews = await getAllNews();
      setFeaturedNews(filterFeatured(allNews));
      setBreakingNews(filterByCategory(allNews, "breaking-news"));
      setPoliticalNews(filterByCategory(allNews, "political"));
      setTechNews(filterByCategory(allNews, "tech"));
      setEntertainmentNews(filterByCategory(allNews, "entertainment"));
      setLoading(false);
    };
    filterMultipleNews();
  }, []);

  return [
    featuredNews,
    politicalNews,
    breakingNews,
    techNews,
    entertainmentNews,
    loading,
  ];
};
