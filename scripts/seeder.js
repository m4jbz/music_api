const { Artist, Album, Track, Genre } = require("../models/muSchema");
const data = require('../data/music.json');
const connectDB = require('../config/db');

connectDB();

const saveArtists = async (artistsToSave) => {
    try {
        const totalAInsertar = artistsToSave.length;
        const docsInsertados = await Artist.insertMany(artistsToSave);

        if (docsInsertados.length === totalAInsertar) {
            console.log(`Éxito total: Se insertaron los ${totalAInsertar} artistas.`);
        } else {
            console.warn(`Atención: Se enviaron ${totalAInsertar} pero solo se confirmaron ${docsInsertados.length}.`);
        }

    } catch (error) {
        console.error("Error durante la inserción:");
        if (error.writeErrors) {
            console.error(`Se insertaron ${error.insertedDocs.length} documentos, pero hubo ${error.writeErrors.length} errores.`);
        } else {
            console.error(error.message);
        }
    }
};

const saveAlbums = async (albumsToSave) => {
    try {
        const totalAInsertar = albumsToSave.length;
        const docsInsertados = await Album.insertMany(albumsToSave);

        if (docsInsertados.length === totalAInsertar) {
            console.log(`Éxito total: Se insertaron los ${totalAInsertar} albums.`);
        } else {
            console.warn(`Atención: Se enviaron ${totalAInsertar} pero solo se confirmaron ${docsInsertados.length}.`);
        }

    } catch (error) {
        console.error("Error durante la inserción:");
        if (error.writeErrors) {
            console.error(`Se insertaron ${error.insertedDocs.length} documentos, pero hubo ${error.writeErrors.length} errores.`);
        } else {
            console.error(error.message);
        }
    }
};

const saveTracks = async (tracksToSave) => {
    try {
        const totalAInsertar = tracksToSave.length;
        const docsInsertados = await Track.insertMany(tracksToSave);

        if (docsInsertados.length === totalAInsertar) {
            console.log(`Éxito total: Se insertaron los ${totalAInsertar} tracks.`);
        } else {
            console.warn(`Atención: Se enviaron ${totalAInsertar} pero solo se confirmaron ${docsInsertados.length}.`);
        }

    } catch (error) {
        console.error("Error durante la inserción:");
        if (error.writeErrors) {
            console.error(`Se insertaron ${error.insertedDocs.length} documentos, pero hubo ${error.writeErrors.length} errores.`);
        } else {
            console.error(error.message);
        }
    }
};

const saveGenres = async (genresToSave) => {
    try {
        const totalAInsertar = genresToSave.length;
        const docsInsertados = await Genre.insertMany(genresToSave);

        if (docsInsertados.length === totalAInsertar) {
            console.log(`Éxito total: Se insertaron los ${totalAInsertar} genres.`);
        } else {
            console.warn(`Atención: Se enviaron ${totalAInsertar} pero solo se confirmaron ${docsInsertados.length}.`);
        }

    } catch (error) {
        console.error("Error durante la inserción:");
        if (error.writeErrors) {
            console.error(`Se insertaron ${error.insertedDocs.length} documentos, pero hubo ${error.writeErrors.length} errores.`);
        } else {
            console.error(error.message);
        }
    }
};

// Maps/Set para guardar sus respectivos campos
const artistsMap = {};
const albumsMap = {};
const tracksMap = {};
const genresSet = new Set();

// Ciclo para iterar por todo el json
data.forEach((item) => {
    try {
        const tracks = item.media.track;
        const generalInfo = tracks.find(t => t['@type'] === 'General');
        const audioInfo = tracks.find(t => t['@type'] === 'Audio');

        if (generalInfo && generalInfo.Genre) {
            generalInfo.Genre.split(',').forEach(g => {
                genresSet.add(g.trim().toLowerCase());
            });
        }

        if (generalInfo && generalInfo.Title) {
            const title = generalInfo.Title;

            if (!tracksMap[title]) {
                tracksMap[title] = {
                    title: title,
                    genres: new Set(),
                    performer: generalInfo.Performer.toLowerCase() || generalInfo.Composer,
                    album: generalInfo.Album,
                    samplingrate: audioInfo.SamplingRate || "Unkown",
                    bitdepth: audioInfo.BitDepth || "Unkown",
                    bitrate: audioInfo.BitRate || "Unkown"
                };
            }

            if (generalInfo.Genre) {
                generalInfo.Genre.split(',').forEach(g => {
                    tracksMap[title].genres.add(g.trim().toLowerCase());
                });
            }
        }

        if (generalInfo && generalInfo.Album) {
            const title = generalInfo.Album;

            if (!albumsMap[title]) {
                albumsMap[title] = {
                    title: title,
                    genres: new Set(),
                    year: "No Data",
                    performer: generalInfo.Performer || generalInfo.Composer,
                    label: generalInfo.Label || "Unkown"
                };
            }

            if (generalInfo.Recorded_Date) {
                albumsMap[title].year = generalInfo.Recorded_Date.substring(0,4);
            }

            if (generalInfo.Genre) {
                generalInfo.Genre.split(',').forEach(g => {
                    albumsMap[title].genres.add(g.trim().toLowerCase());
                });
            }
        }

        if (generalInfo && generalInfo.Performer) {
            const name = generalInfo.Performer;

            if (!artistsMap[name]) {
                artistsMap[name] = {
                    name: name,
                    genres: new Set(),
                    albums: new Set()
                };
            }

            if (generalInfo.Genre) {
                generalInfo.Genre.split(',').forEach(g => {
                    artistsMap[name].genres.add(g.trim().toLowerCase());
                });
            }

            if (generalInfo.Album) {
                artistsMap[name].albums.add(generalInfo.Album.trim());
            }
        }
    } catch (error) {
    }
});

// Conversion de Map/Set a Object para mongoose

const artistsToSave = Object.values(artistsMap)
    .filter(artist => artist.genres.size > 0 || artist.albums.size > 0)
    .map(artist => ({
        name: artist.name,
        genres: Array.from(artist.genres),
        albums: Array.from(artist.albums)
    })
);

const albumsToSave = Object.values(albumsMap).map(album => ({
    title: album.title,
    genres: Array.from(album.genres),
    year: album.year,
    performer: album.performer,
    label: album.label
}));

const genresToSave = Array.from(genresSet).map(nameGenre => ({
    name: nameGenre
}));

const tracksToSave = Object.values(tracksMap).map(track => ({
    title: track.title,
    genres: Array.from(track.genres),
    performer: track.performer,
    album: track.album,
    samplingrate: track.samplingrate,
    bitdepth: track.bitdepth,
    bitrate: track.bitrate
}));

// Insercion de los datos
saveGenres(genresToSave);
saveArtists(artistsToSave);
saveTracks(tracksToSave);
saveAlbums(albumsToSave);
