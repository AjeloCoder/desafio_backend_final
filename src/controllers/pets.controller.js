const petsDao = require('../dao/Pets.dao');

const getAllPets = async (req, res) => {
    try {
        const pets = await petsDao.getAll();
        res.send({ status: "success", payload: pets });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
};
const createPet = async (req, res) => {
    try {
        const pet = await petsDao.save(req.body);
        res.send({ status: "success", payload: pet });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
};
module.exports = { getAllPets, createPet };