// const db = require('../DB');
const {cityDB} = require('../DB/CityDB');

class Controller {
    async newCity (req, res) {
        const {city, temperature, fill_temperature, weather, date_time} = req.body;
        cityDB.create({
            city: city,
            weather: weather,
            temperature: temperature,
            fill_temperature: fill_temperature,
            updatedAt: date_time,
            createdAt: date_time
        })
            .then(c => res.json(c))
            .catch(e => res.json(e["original"]));
    }
    
    async getCities (req, res) {
        cityDB.findAll({raw: true})
            .then(c => res.json(c))
            .catch(e => res.json(e));
    }
    
    // async getCityUpTemperature(req, res) {
    //     const temperature = req.params.t;
    //     cityDB.findAll({больше:{temperature:temperature}, raw: true)
    //         .then(c => {
    //             if (!c) {
    //                 return
    //             }
    //             res.json(c)
    //         })
    //         .catch(e => res.json(e));
    // }
    
    async getCityByID (req, res) {
        const id = req.params.id;
        cityDB.findByPk(id)
            .then(c => {
                if (!c) {
                    return
                }
                res.send(JSON.stringify(c));
            })
            .catch(e => res.send(e));
    }
    
    async getCityByName (req, res) {
        const name = req.params.name;
        cityDB.findOne({where: {city: name}})
            .then(c => {
                if (!c) {
                    return
                }
                res.send(JSON.stringify(c));
            })
            .catch(e => res.send(e));
    }
    
    async updateInformation (req, res) {
        const {city, temperature, fill_temperature, weather, date_time} = req.body;
        
        cityDB.update({
            weather: weather,
            temperature: temperature,
            fill_temperature: fill_temperature,
            updatedAt: date_time
        }, {
            where: {city: city}
        })
            .then(c => res.json(c))
            .catch(e => res.json(e));
    }
    
    async deleteCity (req, res) {
        const city = req.params.city;
        cityDB.destroy({
            where: {city: city}
        })
            .then(c => res.json({deleted: true, count: c}))
            .catch(e => res.json(e));
    }
}

module.exports = new Controller();