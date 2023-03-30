import mongoose from "mongoose";

const productSchems = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
})
export default mongoose.model("Product", productSchems);