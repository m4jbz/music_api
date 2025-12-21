const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    name: {type: String, required: true},
    genres: {type: Array, required: true},
    albums: {type: Array, required: true}
});

const albumSchema = new mongoose.Schema({
    title: {type: String, required: true},
    genres: {type: Array, required: true},
    year: String,
    performer: {type:String, required: true},
    label: String
});

const trackSchema = new mongoose.Schema({
    title: {type: String, required: true},
    genres: {type: Array, required: true},
    performer: {type:String, required: true},
    album: {type: String, required: true},
    samplingrate: String,
    bitdepth: String,
    bitrate: String
});

const genreSchema = new mongoose.Schema({
    name: {type: String, required: true}
});

const Artist = mongoose.model("Artist", artistSchema);
const Album = mongoose.model("Album", albumSchema);
const Track = mongoose.model("Track", trackSchema);
const Genre = mongoose.model("Genre", genreSchema);

module.exports = {
    Artist,
    Album,
    Track,
    Genre
};
