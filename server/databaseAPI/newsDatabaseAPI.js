const SERVER_URL = "http://localhost:5000";
const fs = require("fs");

class News {
  constructor(filename = "newsDB.json") {
    this.path = `./database/${filename}`;
    try {
      fs.readdirSync("database");
    } catch (error) {
      fs.mkdirSync("database");
    }
    try {
      fs.accessSync(this.path);
    } catch (error) {
      fs.writeFileSync(this.path, "[]");
    }
  }

  createId() {
    return new Date().getTime().toString();
  }

  async create(data, id, imageName) {
    const totalData = JSON.parse(await fs.promises.readFile(this.path));
    const { content } = data;
    const short_description = content.substr(0, 100) + "...";
    totalData.push({
      ...data,
      id,
      short_description,
      thumbnail: `${SERVER_URL}/${imageName}`,
    });
    await fs.promises.writeFile(this.path, JSON.stringify(totalData, null, 2));
  }

  async getAll() {
    const data = JSON.parse(await fs.promises.readFile(this.path));
    return data.filter((item) => delete item.content);
  }

  async getSingle(id) {
    const data = JSON.parse(await fs.promises.readFile(this.path));
    return data.find((news) => news.id === id);
  }

  async getByCategory(category) {
    const data = JSON.parse(await fs.promises.readFile(this.path));
    return data.filter(
      (item) => item.category === category && delete item.content
    );
  }
}

module.exports = News;
