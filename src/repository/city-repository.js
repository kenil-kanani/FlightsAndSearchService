const { Op } = require('sequelize');

const { City } = require('../models/index')

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async createManyCities(cities) {
        try {
            // console.log(cities)
            const createdCities = await City.bulkCreate(cities, { fields: ['name'] });
            return createdCities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId,
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            //-method : 1 (return array that contain number of affected raw)
            // const city = await City.update(data , {where : {id : cityId}})
            // return city;
            //-method : 2 (return updated object)
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAllCities(filter) { // filter can be empty also
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAirportsOfCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            if (!city) {
                throw new Error("City not found");
            }
            const airports = await city.getAirports();
            return airports;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = CityRepository;