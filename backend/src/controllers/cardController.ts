const Card = require("../models/cardModel");
const mongoose = require("mongoose");
import { Request, Response } from "express";

// Define a custom user property on the Request type
declare global {
  namespace Express {
    interface Request {
      user?: Document & { _id: string }; // Customize this type to match your User model
    }
  }
}

// Get all cards for specific user
const getCards = async (req: Request, res: Response) => {
  // Get cards owned by the user
  const user_id = (req.user as { _id: string })._id;

  const cards = await Card.find({ user_id }).sort({ createdAt: -1 });

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
    console.log(emptyFields);
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const user_id = (req.user as { _id: string })._id;
    const card = await Card.create({
      pokemonNum,
      name,
      sprite,
      type,
      type2,
      level,
      user_id,
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
