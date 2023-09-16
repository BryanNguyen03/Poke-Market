const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    pokemonNum: { type: Number, required: true },
    name: { type: String, require: true },
    sprite: { type: String, require: true },
    type: { type: String, require: true },
    type2: { type: String, require: false },
    level: { type: Number, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", cardSchema);
