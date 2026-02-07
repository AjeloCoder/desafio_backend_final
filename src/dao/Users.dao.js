const userModel = require('./models/User');

class UsersDao {
    async getAll() {
        return await userModel.find();
    }

    async insertMany(users) {
        return await userModel.insertMany(users);
    }
    
    async save(user) {
        return await userModel.create(user);
    }

    async getUserById(id) {
        return await userModel.findById(id);
    }
    
    async updateUser(id, user) {
        return await userModel.findByIdAndUpdate(id, user, { new: true });
    }
}

module.exports = new UsersDao();