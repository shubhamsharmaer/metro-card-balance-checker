const express = require("express");
const { getCardBalance } = require("../controllers/cardController");
const router = express.Router();

router.get('/:cardNumber', getCardBalance);
module.exports = router;