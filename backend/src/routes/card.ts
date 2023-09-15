const express = require("express");
const Card = require("../models/cardModel");
const {
  getCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
} = require("../controllers/cardController");

const router = express.Router();

router.get("/", getCards);

router.get("/:id", getCard);

router.post("/", createCard);

router.delete("/:id", deleteCard);

router.patch("/:id", updateCard);

module.exports = router;
