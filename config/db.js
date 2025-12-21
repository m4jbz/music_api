require("dotenv").config();
const mongoose = require("mongoose");
const mongoURL = process.env.MONGO_URL;

if (!mongoURL) {
    console.error("MongoDB URL is not defined in the .env file");
    process.exit(1);
}

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL, {
            serverSelectionTimeoutMS: 5000, // Stop trying after 5 seconds if it can't connect
        });
        console.log("MongoDB Connected Successfully");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        process.exit(1); // Exit the process if connection fails
    }
};

// Event listeners for better logging
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected. Trying to reconnect...");
    connectDB();
});

mongoose.connection.on("error", err => {
    console.error("MongoDB Connection Error:", err);
});

// Graceful shutdown handling
process.on("SIGINT", async () => { // SIGINT is send when CTRL + C is pressed
    await mongoose.connection.close();
    console.log("MongoDB Connection Closed. Exiting...");
    process.exit(0);
});

module.exports = connectDB;
