const fs = require("fs");
const sharp = require("sharp");

module.exports = async (req, id) => {
  fs.access("./database/uploads", (err) => {
    if (err) {
      fs.mkdirSync("./database/uploads");
    }
  });

  const formattedName = req.file.originalname.split(" ").join("-");
  const fileName = `${id}-${formattedName}`;
  try {
    await sharp(req.file.buffer)
      .resize({ width: 615, height: 350 })
      .toFile(`./database/uploads/${fileName}`);
  } catch (error) {
    console.log("Error while processing image", error);
  }
  return fileName;
};
