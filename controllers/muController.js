const MuService = require("../services/muService")

class MuController {
    static async getAllArtists(req, res) {
        try {
            const artists = await MuService.getAllArtists(req.query);
            res.status(200).json(artists);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async getAllGenres(req, res) {
        try {
            const genres = await MuService.getAllGenres();
            res.status(200).json(genres);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async getAllAlbums(req, res) {
        try {
            const albums = await MuService.getAllAlbums(req.query);
            res.status(200).json(albums);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async getAllTracks(req, res) {
        try {
            const tracks = await MuService.getAllTracks();
            res.status(200).json(tracks);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async getAlbumByArtist(req, res) {
        try {
            const album = await MuService.getAlbumByArtist(req.params);
            res.status(200).json(album);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = MuController;
