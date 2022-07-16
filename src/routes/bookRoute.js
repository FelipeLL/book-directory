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
router.put("/update/:id", updateBook)
router.delete("/delete/:id", deleteBook)

export default router