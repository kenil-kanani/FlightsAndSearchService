const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/index')

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }

    async update(id, data) {
        try {
            const airport = await this.model.findByPk(id);
            if (!airport) {
                throw new Error('Airport not found');
            }
            console.log("Data : ",data)
            airport.name = data.name;
            return await airport.save();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AirportRepository;