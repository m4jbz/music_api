const { Artist, Album, Track, Genre } = require("../models/muSchema");
const dotenv = require("dotenv");
const validator = require("validator"); // for validating the url

dotenv.config();

class MuController {
    static async getAllArtists(req, res) {
        try {
            const { name, genre } = req.query;
            const filter = {}

            if (name) filter.name = name;
            if (genre) filter.genres = genre;

            const artists = await Artist.find(filter);
            res.status(200).json(artists);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async getAllGenres(req, res) {
        try {
            const genres = await Genre.find({});
            res.status(200).json(genres);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async getAllAlbums(req, res) {
        try {
            const { year, genre } = req.query;
            const filter = {}

            if (year) filter.recorded_date = year;
            if (genre) filter.genres = genre;

            const albums = await Album.find(filter);
            res.status(200).json(albums);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async getAllTracks(req, res) {
        try {
            const tracks = await Track.find({});
            res.status(200).json(tracks);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async getAlbumByArtist(req, res) {
        try {
            const { id } = req.params;
            const artist = await Artist.findOne({ _id: id});
            const album = await Album.findOne({ performer: artist.name });
            res.status(200).json(album);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = MuController;
