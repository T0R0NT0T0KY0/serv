const { cityDB } = require('../../resources/DB/CityDB');

class CityResources {
  async createCity ({ id, city, temperature, fill_temperature, weather, humidity, updatedAt, createdAt }) {
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
      .then(c => c ? c : {})
      .catch(e => JSON.parse(e["original"]));
  }
  
  async getAllCities () {
    cityDB.findAll()
      .then(c => c ? c : {})
      .catch(e => JSON.parse(e));
  }
  
  async getCityByID (id) {
    cityDB.findOne({ where: { id: id } })
      .then(c => c ? c : {})
      .catch(e => JSON.parse(e));
  }
  
  async getCityByName (cityName) {
    return cityDB.findByPk(cityName.toLowerCase().replace(/[^a-z]/g, ""))
      .then(c => c ? c : {})
      .catch(e => JSON.parse(e));
  }
  
  async updateInformationAboutCity ({ cityName, weather, temperature, fill_temperature, date_time }) {
    return cityDB.update({
      weather: weather,
      temperature: temperature,
      fill_temperature: fill_temperature,
      updatedAt: date_time
    }, {
      where: { name: cityName.toLowerCase().replace(/[^a-z]/g, "") }
    });
  }
  
  async deleteCityByName (cityName) {
    return cityDB.destroy({
      where: { name: cityName.toLowerCase().replace(/[^a-z]/g, "") }
    });
  };
  
}

module.exports = new CityResources();