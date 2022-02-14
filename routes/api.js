const express = require("express");
const router = express.Router();
const testFunction = require("../actions/api/test");

router.get("/", testFunction.homepage);

module.exports = router;
