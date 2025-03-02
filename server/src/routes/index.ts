import { Router } from "express";
import { getAllBooks } from "../controllers/book-controller";

const router = Router();

router.get("/", (req, res) => {
  res.json("Hello word");
});

router.get("/books", getAllBooks);

export default router;
