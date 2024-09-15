import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import {
  getAllPost,
  createPost,
  getOnePost,
  updateOnePOst,
  deleteOnePost,
} from "../controllers/postController.js";
import { createUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      path.join(path.dirname(fileURLToPath(import.meta.url)), "../uploads/")
    );
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/sign-up", createUser);
router.post("/sign-in", loginUser);

// Apply `upload.single('image')` middleware to the POST route
router.get("/", getAllPost);
router.post("/", upload.array("image", 5), createPost);
router.get("/:id", getOnePost);
router.put("/:id", updateOnePOst);
router.delete("/:id", deleteOnePost);

export default router;
