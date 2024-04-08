const { check, validationResult } = require("express-validator");

const expectedCategories = ["entertainment", "political", "tech"];

module.exports.validator = [
  check("title").trim().not().isEmpty().withMessage("Title is required"),
  check("content").trim().not().isEmpty().withMessage("Content is required"),
  check("category")
    .isIn(expectedCategories)
    .withMessage("Select at least one category"),
];

module.exports.result = (req, res, next) => {
  const resultArray = validationResult(req);
  const hasError = !resultArray.isEmpty();
  if (hasError) {
    const error = resultArray.array()[0].msg;
    res.status(400).json({ success: false, message: error });
  }
  next();
};

module.exports.validateFile = (req, res, next) => {
  const expectedFileTypes = ["png", "jpg", "jpeg"];
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "Image is required" });
  }

  const fileExtension = req.file.mimetype.split("/").pop();
  if (!expectedFileTypes.includes(fileExtension)) {
    return res
      .status(400)
      .json({ success: false, message: "invalid image submitted" });
  }

  next();
};
