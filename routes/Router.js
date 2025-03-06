const { getData } = require("../controllers/Controller");

const router = require("express").Router();

router.get("/data", getData);

router.use((req, res) => {
  res.status(404).json({ error: "API route not found" });
});

module.exports = router;
