import express from "express"
import {
    getAllBooks,
    createBook,
    updateBook,
    deleteBook
} from "../controllers/bookController.js"
const router = express.Router()

router.get("/", getAllBooks)
router.post("/create", createBook)
router.put("/update", updateBook)
router.delete("/delete", deleteBook)

export default router