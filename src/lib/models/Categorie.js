import { description } from "@/components/BarChart/BarChart";
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String,
});

export const CategoryModal = mongoose.model("categories", categorySchema);
