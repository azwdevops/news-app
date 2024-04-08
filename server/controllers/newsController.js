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
    const data = await news.getByCategory(req.params.category);
    if (data.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No news for this category" });
    }
    return res.json({ success: true, news: data });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error while getting category news" });
  }
};
