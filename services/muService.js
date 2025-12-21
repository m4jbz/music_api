const { Artist, Album, Track, Genre } = require("../models/muSchema");

const getAllArtists = async (queryParams) => {
    const { name, genre } = queryParams;
    const filter = {}

    if (name) filter.name = name;
    if (genre) filter.genres = genre;

    return await Artist.find(filter);
};

const getAllAlbums = async (queryParams) => {
    const { year, genre } = queryParams;
    const filter = {}

    if (year) filter.year = year;
    if (genre) filter.genres = genre;

    return await Album.find(filter);
};

const getAlbumByArtist = async(reqParams) => {
    const { id } = reqParams;
    const artist = await Artist.findOne({ _id: id});

    if (!artist) return [];

    return await Album.find({ performer: artist.name });
};

const getAllGenres = async() => {
    return await Genre.find({});
};

const getAllTracks = async() => {
    return await Track.find({});
};

module.exports = {
    getAllArtists,
    getAllAlbums,
    getAlbumByArtist,
    getAllGenres,
    getAllTracks
};
