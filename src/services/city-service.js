const city = require('../models/city');
const { CityRepository } = require('../repository/index');

const cityRepository = new CityRepository();

class CityService {

    async createCity(data) {
        try {
            const city = await cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong with service layer.");
            throw (error);
        }
    }

    async createManyCities(data) {
        try {
            data = data.cities.map(city => ({ name: city }))
            const cities = await cityRepository.createManyCities(data);
            return cities;
        } catch (error) {
            console.log("Something went wrong with service layer.");
            throw (error);
        }
    }

    async deleteCity(cityId) {
        try {
            const response = cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong with service layer.");
            throw (error);
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong with service layer.");
            throw (error);
        }
    }

    async getCity(cityId) {
        try {
            const city = await cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong with service layer.");
            throw (error);
        }
    }

    async getAllCities(filter) {
        try {
            const cities = await cityRepository.getAllCities({ name: filter.name });
            return cities;
        } catch (error) {
            console.log("Something went wrong with service layer.");
            throw (error);
        }
    }

    async getAirportsOfCity(cityId) {
        try {
            const city = await cityRepository.getAirportsOfCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong with service layer.");
            throw (error);
        }
    }
}

module.exports = CityService;