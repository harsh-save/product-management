import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

export const ProductModel = mongoose.model("products", ProductSchema);
