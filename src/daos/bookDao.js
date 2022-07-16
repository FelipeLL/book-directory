import Url from "../models/bookModel.js"

export const getAllBooks = async () => {
    let books = new Url({ title: "estatico" })
    console.log(books);
}