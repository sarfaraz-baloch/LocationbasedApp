import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    location: {
        lon: Number,
        lat: Number
    },
    profileImage: String,
    address: String,
    bio: String,
});

// Prevent model overwrite
export const UserModal = mongoose.models.Users || mongoose.model("Users", userSchema);
