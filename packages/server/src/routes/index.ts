import { Router } from "express";
import { getAllBooks, getOneBook } from "../controllers/book-controller";
import { login, signup } from "../controllers/auth-controller";

const router = Router();

router.get("/", (req, res) => {
  res.json("Hello word");
});

router.get("/books", getAllBooks);
router.get("/books/:isbn", getOneBook);

router.post("/signup", signup);
router.post("/login", login);

export default router;
