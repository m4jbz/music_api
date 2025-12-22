const express = require("express");
const MuController = require("../controllers/muController");
const auth = require("../middleware/authMiddleware");

const muRouter = express.Router();

muRouter.get("/artists/:id/albums", auth, MuController.getAlbumByArtist);
muRouter.get("/artists", auth, MuController.getAllArtists);
muRouter.get("/albums", auth, MuController.getAllAlbums);
muRouter.get("/tracks", auth, MuController.getAllTracks);
muRouter.get("/genres", auth, MuController.getAllGenres);

module.exports = muRouter;
