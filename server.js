const connectDB = require('./config/db');
const { Artist, Album, Track, Genre } = require("./models/muSchema");
const muRoutes = require('./routes/muRoutes');
require('dotenv').config()

const express = require("express");
const cors = require("cors"); // CORS sirve para hacer requests sin que el browser las bloquee

const app = express();
const PORT = process.env.PORT || 6969;


app.use(cors());
app.use(express.json()); // To parse JSON requests

connectDB();

app.use(muRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});
