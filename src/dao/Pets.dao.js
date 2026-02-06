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
    
     async getPetById(id) {
        return await petModel.findById(id);
    }

    async updatePet(id, pet) {
        return await petModel.findByIdAndUpdate(id, pet, { new: true });
    }
}

module.exports = new PetsDao();