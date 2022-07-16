import { createBook, deleteBook, getAllBooks, updateBook } from "../daos/bookDao.js"

export const getAll = async () => {
    return await getAllBooks()
}

export const create = async (title) => {
    return await createBook(title)
}

export const update = async (id, title) => {

    const book = {
        title
    }
    await updateBook(id, book)

}

export const remove = async (id) => {
    let results = await deleteBook(id)
    if (results !== null) {
        return results
    } else {
        throw "This id does not exist in the database"
    }
}