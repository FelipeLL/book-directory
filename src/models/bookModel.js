import mongoose from "mongoose";
const { Schema } = mongoose

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
})

const Book = mongoose.model("Book", bookSchema)

export default Book