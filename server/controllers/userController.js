//Required modules for creating an user in database
import User from "../models/user.js";
import bcrypt from "bcryptjs";

//Requires modules for logging in an existing user
import jwt from "jsonwebtoken";
import crypto from "crypto";

//Creating an user
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    res.status(200).json({ user: newUser });
  } catch (error) {
    res.status(503).json({ error: error.message });
  }
};

//Logging in
const secretKey = crypto.randomBytes(64).toString("hex");

// console.log(`Secret Key: ${secretKey}`);

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const currUser = await User.findOne({ email });
    if (!currUser) {
      return res.status(404).json({ message: "No user found with this email" });
    }
    const isMatch = await bcrypt.compare(password, currUser.password);
    if (isMatch) {
      const token = jwt.sign({ email: currUser.email }, secretKey, {
        expiresIn: "1m",
      });

      return res.status(201).json({
        message: "Login successful",
        token: token,
        user: {
          name: currUser.name,
          email: currUser.email,
        },
      });
    } else {
      return res.status(403).json({ message: "Incorrect password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
