const usersDao = require('../dao/Users.dao');

const getAllUsers = async (req, res) => {
    try {
        const users = await usersDao.getAll();
        res.send({ status: "success", payload: users });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        const result = await usersDao.save(req.body);
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
};

// Agrega getById, updateUser, deleteUser si quieres completar el CRUD
// Por ahora con estos basta para la documentación

module.exports = {
    getAllUsers,
    createUser
};