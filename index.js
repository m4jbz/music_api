const data = require('./data/music.json');
const connectDB = require('./database/db');
const service = require('./services/muService');
const { Artist, Album, Track, Genre } = require("./models/muSchema");
const muRoutes = require('./routes/muRoutes');

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

// const artistsMap = {};
// const albumsMap = {};
// const tracksMap = {};
// const genresSet = new Set();

// data.forEach((item) => {
    // try {
        // const tracks = item.media.track;
        // const generalInfo = tracks.find(t => t['@type'] === 'General');
        // const audioInfo = tracks.find(t => t['@type'] === 'Audio');
        //
        // if (generalInfo && generalInfo.Genre) {
        //     generalInfo.Genre.split(',').forEach(g => {
        //         genresSet.add(g.trim().toLowerCase());
        //     });
        // }

        // if (generalInfo && generalInfo.Title) {
        //     const title = generalInfo.Title;
        //
        //     if (!tracksMap[title]) {
        //         tracksMap[title] = {
        //             title: title,
        //             genres: new Set(),
        //             performer: generalInfo.Performer.toLowerCase() || generalInfo.Composer,
        //             album: generalInfo.Album,
        //             samplingrate: audioInfo.SamplingRate || "Unkown",
        //             bitdepth: audioInfo.BitDepth || "Unkown",
        //             bitrate: audioInfo.BitRate || "Unkown"
        //         };
        //     }
        //
        //     if (generalInfo.Genre) {
        //         generalInfo.Genre.split(',').forEach(g => {
        //             tracksMap[title].genres.add(g.trim().toLowerCase());
        //         });
        //     }
        // }

        // if (generalInfo && generalInfo.Album) {
        //     const title = generalInfo.Album;
        //
        //     if (!albumsMap[title]) {
        //         albumsMap[title] = {
        //             title: title,
        //             genres: new Set(),
        //             recorded_date: "No Data",
        //             performer: generalInfo.Performer.toLowerCase() || generalInfo.Composer.toLowerCase(),
        //             label: generalInfo.Label || "Unkown"
        //         };
        //     }
        //
        //     if (generalInfo.Recorded_Date) {
        //         albumsMap[title].recorded_date = generalInfo.Recorded_Date.substring(0,4);
        //     }
        //
        //     if (generalInfo.Genre) {
        //         generalInfo.Genre.split(',').forEach(g => {
        //             albumsMap[title].genres.add(g.trim().toLowerCase());
        //         });
        //     }
        // }

        // if (generalInfo && generalInfo.Performer) {
        //     const name = generalInfo.Performer;
        //
        //     if (!artistsMap[name]) {
        //         artistsMap[name] = {
        //             name: name,
        //             genres: new Set(),
        //             albums: new Set()
        //         };
        //     }
        //
        //     if (generalInfo.Genre) {
        //         generalInfo.Genre.split(',').forEach(g => {
        //             artistsMap[name].genres.add(g.trim());
        //         });
        //     }
        //
        //     if (generalInfo.Album) {
        //         artistsMap[name].albums.add(generalInfo.Album.trim());
        //     }
        // }
    // } catch (error) {
    // }
// });

// const artistsToSave = Object.values(artistsMap)
//     .filter(artist => artist.genres.size > 0 || artist.albums.size > 0)
//     .map(artist => ({
//         name: artist.name,
//         genres: Array.from(artist.genres),
//         albums: Array.from(artist.albums)
//     })
// );

// const albumsToSave = Object.values(albumsMap).map(album => ({
//     title: album.title,
//     genres: Array.from(album.genres),
//     recorded_date: album.recorded_date,
//     performer: album.performer,
//     label: album.label
// }));

// const genresToSave = Array.from(genresSet).map(nameGenre => ({
//     name: nameGenre
// }));

// const tracksToSave = Object.values(tracksMap).map(track => ({
//     title: track.title,
//     genres: Array.from(track.genres),
//     performer: track.performer,
//     album: track.album,
//     samplingrate: track.samplingrate,
//     bitdepth: track.bitdepth,
//     bitrate: track.bitrate
// }));

// console.log(artistsToSave.length);
// console.log(albumsToSave.length);
// console.log(genresToSave);
// console.log(tracksToSave);

// service.saveGenres(genresToSave);
// service.saveArtists(artistsToSave);
// service.saveTracks(tracksToSave);
// service.saveAlbums(albumsToSave);
