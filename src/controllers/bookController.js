import { getAll } from "../services/bookService.js"


export const getAllBooks = async (req, res) => {
    try {
        let books = await getAll()
        res.send(books)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createBook = (req, res) => {
    try {
        res.send({ message: "creando un libro" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateBook = (req, res) => {
    try {
        res.send({ message: "actualizando un libro" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteBook = (req, res) => {
    try {
        res.send({ message: "eliminando un libro" })
    } catch (error) {
        res.json({ message: error.message })
    }
}