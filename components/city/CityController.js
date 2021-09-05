const CityResources = require('./CityResources');

class CityController {
  async createCityController (req, res) {
    const { id, city, temperature, fill_temperature, weather, humidity, updatedAt, createdAt } = await req.body;
    const data = await CityResources.createCity({
      id,
      city,
      temperature,
      fill_temperature,
      weather,
      humidity,
      updatedAt,
      createdAt
    });
    res.send({ data });
  }
  
  async getAllCitiesController (req, res) {
    const data = await CityResources.getAllCities();
    res.send({ data });
  }
  
  async getCityByIDController (req, res) {
    const id = req.params.id;
    const data = await CityResources.getCityByID(id);
    res.send({ data });
  }
  
  async getCityByNameController (req, res) {
    const cityName = req.params.city;
    const data = await CityResources.getCityByName(cityName);
    res.send({ data });
  }
  
  async updateInformationAboutCityController (req, res) {
    const { temperature, fill_temperature, weather, date_time } = req.body;
    const cityName = req.body.city;
    const data = await CityResources.updateInformationAboutCity({
      cityName,
      weather,
      temperature,
      fill_temperature,
      date_time
    });
    res.send({ data });
  }
  
  async deleteCityByNameController (req, res) {
    const cityName = req.params.city;
    const data = await CityResources.deleteCityByName(cityName);
    res.send({ data });
  };
  
}

module.exports = new CityController();