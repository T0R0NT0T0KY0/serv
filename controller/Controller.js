const {cityDB} = require('../DB/CityDB');

class Controller {
    async newCity (req, res) {
        const {id, city, temperature, fill_temperature, weather, humidity, updatedAt, createdAt} = await req.body;
        cityDB.create({
            id: id,
            name: city.toLowerCase().replace(/[^a-z]/g, ""),
            city: city,
            weather: weather,
            temperature: temperature,
            fill_temperature: fill_temperature,
            updatedAt: updatedAt,
            createdAt: createdAt,
            humidity: humidity
        })
            .then(c => res.send(c))
            .catch(e => res.json(e["original"]));
    }
    
    async inDev (req, res) {
    
    }
    
    async getCities (req, res) {
        cityDB.findAll()
            .then(c => res.json(c))
            .catch(e => res.json(e));
    }
    
    // async getCityUpTemperature(req, res) {
    // const temperature = req.query.t;
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
            .catch(e => res.json(e));
    }
    
    async getCityByName (req, res) {
        const cityName = req.params.city.toLowerCase().replace(/[^a-z]/g, "");
        console.log(cityName);
        cityDB.findByPk(cityName)
            .then(c => {
                if (!c) {
                    return res.json(null);
                }
                return res.json(JSON.stringify(c));
            })
            .catch(() => res.json(null));
    }
    
    async updateInformation (req, res) {
        const {temperature, fill_temperature, weather, date_time} = req.body;
        const cityName = req.body.city.toLowerCase().replace(/[^a-z]/g, "");
        
        cityDB.update({
            weather: weather,
            temperature: temperature,
            fill_temperature: fill_temperature,
            updatedAt: date_time
        }, {
            where: {name: cityName}
        })
            .then(c => res.json(c))
            .catch(e => res.json(e));
    }
    
    async deleteCity (req, res) {
        const cityName = req.params.city.toLowerCase().replace(/[^a-z]/g, "");
        cityDB.destroy({
            where: {name: cityName}
        })
            .then(c => res.json({deleted: true, count: c}))
            .catch(e => res.json(e));
    };
    
}

module.exports = new Controller();