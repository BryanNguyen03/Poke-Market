const express = require("express");
const Card = require("../models/cardModel");
const router = express.Router();
const {
  getCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
} = require("../controllers/cardController");

// require auth for all card routes
const requireAuth = require("../middleware/requireAuth");
router.use(requireAuth);

router.get("/", getCards);

router.get("/:id", getCard);

router.post("/", createCard);

router.delete("/:id", deleteCard);

router.patch("/:id", updateCard);

module.exports = router;
