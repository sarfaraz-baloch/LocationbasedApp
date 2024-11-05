import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  startTime: String,
  endTime: String,
  startDate: String,
  endDate: String,
  location: {
    lon: Number,
    lat: Number,
  },
  address: String,
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  going: [{
    type: mongoose.Types.ObjectId,
    ref: "Users",
  }],
});

export const EventModal = mongoose.model("events", eventSchema);
