const adoptionModel = require('./models/Adoptions');

class AdoptionsDao {
    async getAll() {
        return await adoptionModel.find();
    }

    async getById(id) {
        return await adoptionModel.findById(id);
    }

    async save(adoption) {
        return await adoptionModel.create(adoption);
    }
}

module.exports = new AdoptionsDao();