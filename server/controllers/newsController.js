const News = require("../databaseAPI/newsDatabaseAPI.js");
const imageProcessor = require("../middleware/imageProcessor.js");

const news = new News();

module.exports.createNews = async (req, res) => {
  const id = news.createId();

  try {
    await imageProcessor(req, id);
    const imageName = await imageProcessor(req, id);
    news.create(req.body, id, imageName);
    res
      .status(201)
      .json({ success: true, message: "News created successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error creating news" });
  }
};

module.exports.getAllNews = async (req, res) => {
  try {
    const data = await news.getAll();
    return res.json({ success: true, news: data });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error while getting news" });
  }
};

module.exports.getSingleNews = async (req, res) => {
  try {
    const data = await news.getSingle(req.params.id);
    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "News not found" });
    }
    return res.json({ success: true, news: data });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error while getting single news" });
  }
};

module.exports.getCategoryNews = async (req, res) => {
  try {
    const { category, qty } = req.params;
    const data = await news.getByCategory(category);
    if (data.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No news for this category" });
    }
    if (qty) {
      // below we use the spread operator ... to create a new array thus avoid deleting some items in the previous data array
      return res.json({ success: true, news: [...data].splice(0, qty) });
    }
    return res.json({ success: true, news: data });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error while getting category news" });
  }
};

module.exports.searchPosts = async (req, res) => {
  try {
    const response = await news.searchPosts(req.params.query);
    if (response.length === 0) {
      return res.json({ success: false, message: "No posts found" });
    }
    return res.json({ success: true, news: response });
  } catch (error) {
    return res.json({ success: false, message: "Error while fetching news" });
  }
};
