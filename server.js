const connectDB = require('./config/db');

const muRoutes = require('./routes/muRoutes');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config()

const express = require("express");

const app = express();
const PORT = process.env.PORT || 6969;

app.use(express.json()); // To parse JSON requests

connectDB();

app.use(muRoutes);
app.use(authRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});

console.log("asd");
