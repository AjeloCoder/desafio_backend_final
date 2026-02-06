const petModel = require('./models/Pet');

class PetsDao {
    async getAll() {
        return await petModel.find();
    }

    async insertMany(pets) {
        return await petModel.insertMany(pets);
    }

    async save(pet) {
        return await petModel.create(pet);
    }
}

module.exports = new PetsDao();