const Card = require("../models/cardModel");
const mongoose = require("mongoose");
import { Request, Response } from "express";

// Get all cards
const getCards = async (req: Request, res: Response) => {
  const cards = await Card.find({}).sort({ createdAt: -1 });

  res.status(200).json(cards);
};

// Get one card
const getCard = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Card not found" });
  }

  const card = await Card.findById(id);
  if (!card) {
    return res.status(404).json({ error: "Card not found" });
  }

  res.status(200).json(card);
};

// Create a card
const createCard = async (req: Request, res: Response) => {
  const { pokemonNum, name, sprite, type, type2, level } = req.body;

  // Check for any empty fields
  // Note that type2 (the pokemon's secondary typing) is not a mandatory field
  let emptyFields = [];

  if (!pokemonNum) {
    emptyFields.push("pokemonNum");
  }
  if (!name) {
    emptyFields.push("name");
  }
  if (!sprite) {
    emptyFields.push("sprite");
  }
  if (!type) {
    emptyFields.push("type");
  }
  if (!level) {
    emptyFields.push("level");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const card = await Card.create({
      pokemonNum,
      name,
      sprite,
      type,
      type2,
      level,
    });
    res.status(200).json(card);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Update a card
const updateCard = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Card not found" });
  }

  const card = await Card.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!card) {
    return res.status(404).json({ error: "Card not found" });
  }

  res.status(200).json(card);
};

// Delete a card
const deleteCard = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Card not found" });
  }

  const card = await Card.findOneAndDelete({ _id: id });

  if (!card) {
    return res.status(404).json({ error: "Card not found" });
  }

  res.status(200).json(card);
};

module.exports = {
  createCard,
  getCard,
  deleteCard,
  updateCard,
  getCards,
};
