const express = require('express');
const router = express.Router();

const REPLACE_ME = 'HELP REPLACE ME!!!!';

const { getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame, 
    deleteVideoGame
} = require('../db/videoGames');

// GET - /api/video-games - get all video games
router.get('/', async (req, res, next) => {
    try {
        const videoGames = await getAllVideoGames();
        res.send(videoGames);
    } catch (error) {
        next(error);
    }
});

// GET - /api/video-games/:id - get a single video game by id
router.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const videoGame = await getVideoGameById(id);
        res.send(videoGame);
    } catch (error) {
        next(error);
    }
});

// POST - /api/video-games - create a new video game
router.post('/', async (req, res, next) => {
    // LOGIC GOES HERE 
    try{
        console.log(req.body)
        const newVideoGame = await createVideoGame(req.body);
        res.send(newVideoGame)

    }catch (error){
        console.log(error)
    }
});


// PUT - /api/video-games/:id - update a single video game by id
router.put('/:id', async (req, res, next) => {
    try{
        const {id} = req.params
        const updateVC = await updateVideoGame(id, req.body);
        res.send(updateVC);
    }
    catch(error)
    {
        console.log(error)
    }
});

// DELETE - /api/video-games/:id - delete a single video game by id
router.delete('/:id', async (req, res, next) => {
    try{
        const {id}= req.params;
        const deletedVG = await deleteVideoGame(id);
        res.send(deletedVG);
    }catch(error){
        console.log(error);
    }
});

module.exports = router;
