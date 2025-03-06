const { getData } = require("../controllers/Controller");

const router = require("express").Router();

router.get("/data", getData);

module.exports = router;
