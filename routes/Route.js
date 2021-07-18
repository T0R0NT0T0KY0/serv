const Router = require('express');
const router = new Router();
const Controller = require('../controller/Controller');

router.get('/', Controller.inDev)
router.post('/city', Controller.newCity);
router.get('/city', Controller.getCities);
router.get('/city/:city', Controller.getCityByName);
router.put('/city', Controller.updateInformation);
router.delete('/city/:city', Controller.deleteCity);

module.exports = {router};