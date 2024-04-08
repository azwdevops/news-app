const express = require("express");
const {
  createNews,
  getAllNews,
  getSingleNews,
  getCategoryNews,
} = require("../controllers/newsController");
const uploads = require("../middleware/multer");
const { validator, result, validateFile } = require("../middleware/validator");

const router = express.Router();

router.post(
  "/create-news",
  uploads.single("thumbnail"),
  validator,
  result,
  validateFile,
  createNews
);
router.get("/news", getAllNews);
router.get("/news/single/:id", getSingleNews);
router.get("/news/category/:category", getCategoryNews);

module.exports = router;
