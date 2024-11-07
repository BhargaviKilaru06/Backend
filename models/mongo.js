require('dotenv').config(); // To load environment variables from .env file
const mongoose = require("mongoose");

// Use MONGO_URI from environment variables
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connection established successfully");
})
.catch((error) => {
    console.error("Error occurred in connection:", error);
});

// Define the user schema
const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the user model
const User = mongoose.model("User", userSchema);

module.exports = { User };
