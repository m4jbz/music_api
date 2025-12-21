const express = require("express");
const MuController = require("../controllers/muController");

const router = express.Router();

router.get("/artists/:id/albums", MuController.getAlbumByArtist);
router.get("/artists", MuController.getAllArtists);
router.get("/albums", MuController.getAllAlbums);
router.get("/tracks", MuController.getAllTracks);
router.get("/genres", MuController.getAllGenres);

module.exports = router;
