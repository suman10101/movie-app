import express from "express";
import {
  register,
  login,
  getUserProfile,
  updateProfile,
  getUserById,
} from "../controllers/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/", auth, getUserProfile);
router.patch("/:id", auth, updateProfile);
router.get("/:id", auth, getUserById);

export default router;
