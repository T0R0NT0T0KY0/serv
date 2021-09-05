const Router = require('express');
const router = new Router();
const CityController = require('../components/city/CityController');
const MusicController = require('../components/music/MusicController');

// route для city
router.post('/city', CityController.createCityController);
router.get('/city', CityController.getAllCitiesController);
router.get('/city/:city', CityController.getCityByNameController);
router.get('/city/:id', CityController.getCityByIDController);
router.put('/city', CityController.updateInformationAboutCityController);
router.delete('/city/:city', CityController.deleteCityByNameController);

//route для music
router.post('/music', MusicController.newMusic);
router.get('/music', MusicController.getMusics);
router.get('/music/:music', MusicController.getMusicByName);
router.delete('/music/:music', MusicController.deleteMusic);



module.exports = {router};