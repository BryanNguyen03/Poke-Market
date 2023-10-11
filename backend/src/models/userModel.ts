const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

// Define user interface for typescript
export interface IUser {
  email: string;
  password: string;
}

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

/**
 * method for signing up users. Static so that we can call the method directly on the model itself rather than an instance of the model
 * @param email
 * @param password
 * @returns a user object if the provided email and password are valid
 */
userSchema.statics.signup = async function (
  email: string,
  password: string
): Promise<IUser> {
  // Check fields
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  // check if email is already being used
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  // generate salt and hash our password
  const salt = await bcrypt.genSalt(13);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });

  return user;
};

/**
 * method for logging users in. Static so that we can call the method directly on the model itself rather than an instance of the model
 * @param email user inputted email
 * @param password user inputted password
 * @returns a user object if provided email and password are valid
 */
userSchema.statics.login = async function (
  email: String,
  password: String
): Promise<IUser> {
  // Check fields
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  // Check if email is valid
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Invalid email");
  }

  // Check password
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect Password");
  }

  // If email and password are valid, we can return the user object
  return user;
};

module.exports = mongoose.model("User", userSchema);
