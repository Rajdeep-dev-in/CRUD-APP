import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const user = mongoose.model("user", userSchema);

export default user;