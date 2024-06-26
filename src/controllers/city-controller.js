const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error
        })
    }
}

const createMany = async (req, res) => {
    try {
        const cities = await cityService.createManyCities(req.body);
        return res.status(201).json({
            data: cities,
            success: true,
            message: 'Successfully created cities',
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create cities',
            err: error
        })
    }

}

//- DELETE => city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            err: error
        })
    }
}

//- GET => /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully get a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        })
    }
}

//- PATCH => /city/:id  -> req.body
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully update a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const response = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully get all cities',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get all cities',
            err: error
        })
    }
}

const getAirportsOfCity = async (req, res) => {
    try {
        const response = await cityService.getAirportsOfCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully get all airports of city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get all airports of city',
            err: error
        })
    }
}

module.exports = {
    create,
    createMany,
    destroy,
    get,
    update,
    getAll,
    getAirportsOfCity
}