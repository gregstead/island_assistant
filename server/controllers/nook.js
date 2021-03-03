const nookService = require("../services/nook");

module.exports = {
  async getAllByCategory(req, res) {
    try {
      const { data } = await nookService.getAllByCategory(req.params.category);
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).end();
    }
  },
  async getVillagerByName(req, res) {
    try {
      const { data } = await nookService.getVillagerByName(req.params.name);
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).end();
    }
  },
  async getOneByCategory(req, res) {
    try {
      const { data } = await nookService.getOneByCategory(
        req.params.category,
        req.params.name
      );
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).end();
    }
  },
};
