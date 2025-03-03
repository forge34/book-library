import { Router } from "express";
import { getAllBooks, getOneBook } from "../controllers/book-controller";

const router = Router();

router.get("/", (req, res) => {
  res.json("Hello word");
});

router.get("/books", getAllBooks);
router.get("/books/:isbn", getOneBook);

export default router;
