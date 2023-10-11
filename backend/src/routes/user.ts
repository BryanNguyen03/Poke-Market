import { Router } from "express";
const router = Router();
const { loginUser, signupUser } = require("../controllers/userController");

router.post("/login", loginUser);

router.post("/signup", signupUser);

module.exports = router;
