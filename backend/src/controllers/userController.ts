const User = require("../models/userModel");
const mongoose = require("mongoose");
import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

/**
 * Function to create our json web token
 * @param _id our payload data to create the token
 * @returns the newly created web token
 */
const createToken = (_id: String) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const signupUser = async (req: Request, res: Response) => {
  // Get inputted email and password
  const { email, password } = req.body;

  try {
    // Call our signup method to validate the email and password
    const user = await User.signup(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
