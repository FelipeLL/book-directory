import Book from "../models/bookModel.js"

export const getAllBooks = async () => {
    let books = await Book.find()
    return books
}

export const createBook = async (title) => {
    let books = new Book({ title })
    await books.save()
    return books
}

export const updateBook = async (id, book) => {
    await Book.findByIdAndUpdate(id, book)
}

export const deleteBook = async (id) => {
    let results = await Book.findByIdAndDelete(id)
    return results
}