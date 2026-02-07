const usersDao = require('../dao/Users.dao');
const petsDao = require('../dao/Pets.dao');
const adoptionsDao = require('../dao/Adoptions.dao');

const getAllAdoptions = async (req, res) => {
    try {
        const result = await adoptionsDao.getAll();
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
};

const getAdoption = async (req, res) => {
    try {
        const adoptionId = req.params.aid;
        const adoption = await adoptionsDao.getById(adoptionId);
        if (!adoption) return res.status(404).send({ status: "error", error: "Adoption not found" });
        res.send({ status: "success", payload: adoption });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
};

const createAdoption = async (req, res) => {
    try {
        const { uid, pid } = req.params; 

        
        const user = await usersDao.getUserById(uid);
        if (!user) return res.status(404).send({ status: "error", error: "User not found" });

        
        const pet = await petsDao.getPetById(pid);
        if (!pet) return res.status(404).send({ status: "error", error: "Pet not found" });

   
        if (pet.adopted) return res.status(400).send({ status: "error", error: "Pet is already adopted" });

        
        pet.adopted = true;
        pet.owner = user._id;
        await petsDao.updatePet(pet._id, pet);

        user.pets.push(pet._id);
        await usersDao.updateUser(user._id, user);

        const adoption = await adoptionsDao.save({ owner: user._id, pet: pet._id });

        res.send({ status: "success", message: "Adoption created", payload: adoption });

    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
};

module.exports = {
    createAdoption,
    getAllAdoptions,
    getAdoption
};