const userModel = require('./models/User');

class UsersDao {
    // Devuelve todos los usuarios
    async getAll() {
        return await userModel.find();
    }

    // Guarda un array de usuarios de golpe (Optimizado)
    async insertMany(users) {
        return await userModel.insertMany(users);
    }
    
    // Guarda uno solo (por si acaso)
    async save(user) {
        return await userModel.create(user);
    }
}

module.exports = new UsersDao();