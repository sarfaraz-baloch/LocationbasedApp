import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String,
  category: {
    type: mongoose.Types.ObjectId,
    ref: "categories",
  },
});

export const SubCategoryModal = mongoose.model("subcategories", subcategorySchema);
