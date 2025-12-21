const { Artist, Album, Track, Genre } = require("../models/muSchema");

// const saveArtists = async (artistsToSave) => {
//     try {
//         const totalAInsertar = artistsToSave.length;
//         const docsInsertados = await Artist.insertMany(artistsToSave);
//
//         if (docsInsertados.length === totalAInsertar) {
//             console.log(`Éxito total: Se insertaron los ${totalAInsertar} artistas.`);
//         } else {
//             console.warn(`Atención: Se enviaron ${totalAInsertar} pero solo se confirmaron ${docsInsertados.length}.`);
//         }
//
//     } catch (error) {
//         console.error("Error durante la inserción:");
//         if (error.writeErrors) {
//             console.error(`Se insertaron ${error.insertedDocs.length} documentos, pero hubo ${error.writeErrors.length} errores.`);
//         } else {
//             console.error(error.message);
//         }
//     }
// };
//
// const saveAlbums = async (albumsToSave) => {
//     try {
//         const totalAInsertar = albumsToSave.length;
//         const docsInsertados = await Album.insertMany(albumsToSave);
//
//         if (docsInsertados.length === totalAInsertar) {
//             console.log(`Éxito total: Se insertaron los ${totalAInsertar} albums.`);
//         } else {
//             console.warn(`Atención: Se enviaron ${totalAInsertar} pero solo se confirmaron ${docsInsertados.length}.`);
//         }
//
//     } catch (error) {
//         console.error("Error durante la inserción:");
//         if (error.writeErrors) {
//             console.error(`Se insertaron ${error.insertedDocs.length} documentos, pero hubo ${error.writeErrors.length} errores.`);
//         } else {
//             console.error(error.message);
//         }
//     }
// };
//
// const saveTracks = async (tracksToSave) => {
//     try {
//         const totalAInsertar = tracksToSave.length;
//         const docsInsertados = await Track.insertMany(tracksToSave);
//
//         if (docsInsertados.length === totalAInsertar) {
//             console.log(`Éxito total: Se insertaron los ${totalAInsertar} tracks.`);
//         } else {
//             console.warn(`Atención: Se enviaron ${totalAInsertar} pero solo se confirmaron ${docsInsertados.length}.`);
//         }
//
//     } catch (error) {
//         console.error("Error durante la inserción:");
//         if (error.writeErrors) {
//             console.error(`Se insertaron ${error.insertedDocs.length} documentos, pero hubo ${error.writeErrors.length} errores.`);
//         } else {
//             console.error(error.message);
//         }
//     }
// };
//
// const saveGenres = async (genresToSave) => {
//     try {
//         const totalAInsertar = genresToSave.length;
//         const docsInsertados = await Genre.insertMany(genresToSave);
//
//         if (docsInsertados.length === totalAInsertar) {
//             console.log(`Éxito total: Se insertaron los ${totalAInsertar} genres.`);
//         } else {
//             console.warn(`Atención: Se enviaron ${totalAInsertar} pero solo se confirmaron ${docsInsertados.length}.`);
//         }
//
//     } catch (error) {
//         console.error("Error durante la inserción:");
//         if (error.writeErrors) {
//             console.error(`Se insertaron ${error.insertedDocs.length} documentos, pero hubo ${error.writeErrors.length} errores.`);
//         } else {
//             console.error(error.message);
//         }
//     }
// };

module.exports = {
    // saveArtists,
    // saveAlbums,
    // saveTracks,
    // saveGenres
};
