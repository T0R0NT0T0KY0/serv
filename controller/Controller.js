const {cityDB} = require('../DB/CityDB');

class Controller {
    async newCity (req, res) {
        const {id, city, temperature, fill_temperature, weather, humidity, updatedAt, createdAt} = await req.body;
        console.log(id);
        console.log(city);
        console.log(createdAt);
        cityDB.create({
            id: id,
            city: city,
            weather: weather,
            temperature: temperature,
            fill_temperature: fill_temperature,
            updatedAt: updatedAt,
            createdAt: createdAt,
            humidity: humidity
        })
            .then(c => res.send(c))
            .catch(e => res.send(e["original"]));
    }
    
    async send (req, res) {
    
    }
    
    async getCities (req, res) {
        cityDB.findAll()
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
        cityDB.findOne({where: {id: id}})
            .then(c => {
                if (!c) {
                    return
                }
                res.json(JSON.stringify(c));
            })
            .catch(e => res.send(e));
    }
    
    async getCityByName (req, res) {
        
        const city = req.params.city;
        console.log(city);
        cityDB.findByPk(city)
            .then(c => {
                if (!c) {
                    return
                }
                res.json(JSON.stringify(c));
            })
            .catch(e => res.json(e));
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
    };
    
}

module.exports = new Controller();