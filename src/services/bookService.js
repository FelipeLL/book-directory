import { getAllBooks } from "../daos/bookDao.js"

export const getAll = async () => {
    return await getAllBooks()
}