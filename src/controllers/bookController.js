import { create, getAll, remove, update } from "../services/bookService.js"


export const getAllBooks = async (req, res) => {
    try {
        let books = await getAll()
        res.json(books)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createBook = async (req, res) => {
    try {
        let books = await create(req.body.title)
        res.send({ message: "Book has been created" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateBook = async (req, res) => {
    try {
        await update(req.params.id, req.body.title)
        res.send({ message: "Book has been updated" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteBook = async (req, res) => {
    try {
        await remove(req.params.id)
        res.send({ message: "Book has been deleted" })
    } catch (error) {
        res.status(404).send(error)
    }
}