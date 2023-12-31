const client = require('./client');
const util = require('util');

const REPLACE_ME = 'HELP REPLACE ME!!!!';

// GET - /api/video-games - get all video games
async function getAllVideoGames() {
    try {
        const { rows: videoGames } = await client.query(`
            SELECT * FROM videoGames;
        `);
        return videoGames;
    } catch (error) {
        throw new Error("Make sure you have replaced the REPLACE_ME placeholder.")
    }
}

// GET - /api/video-games/:id - get a single video game by id
async function getVideoGameById(id) {
    try {
        const { rows: [videoGame] } = await client.query(`
            SELECT * FROM videoGames
            WHERE id = $1;
        `, [id]);
        return videoGame;
    } catch (error) {
        throw error;
    }
}

// POST - /api/video-games - create a new video game
async function createVideoGame(name, description, price) {
    try{
        const {rows: [newVideoGame]} = await client.query(`INSERT INTO videoGames (name, description, price) VALUES ($1, $2, $3) RETURNING *`, 
        [name, description, price]);
        return newVideoGame
    } catch(error){
        throw error;
    }
}

// PUT - /api/video-games/:id - update a single video game by id
async function updateVideoGame(id, fields = {}) {
    // LOGIC GOES HERE
    try{
        const {row : [updateVC]} = await client.query(
            `SELECT  * FROM videoGames
            
            UPDATE field SET name = $1 
            WHERE id = $2; `, [fields, id]
        );
    } catch (error){
        throw error;
    }
}

// DELETE - /api/video-games/:id - delete a single video game by id
async function deleteVideoGame(id) {
    try{
        const {row: [deleteVideoGame]} = await client.query( 
            `DELETE FROM videoGames 
            WHERE id = $1;`, 
            [id]);
    }catch (error){
        throw error;
    }
}

module.exports = {
    getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame
}