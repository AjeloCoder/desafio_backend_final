const { generateUser, generatePet } = require('../utils/mockUtils');
const usersDao = require('../dao/Users.dao');
const petsDao = require('../dao/Pets.dao');

class MocksController {
    
    // Endpoint: GET /mockingusers
    // Objetivo: Generar 50 usuarios y devolverlos (NO insertar en BD, solo visualización)
    getMockingUsers = async (req, res) => {
        const users = [];
        for (let i = 0; i < 50; i++) {
            users.push(generateUser());
        }
        res.send({ status: "success", payload: users });
    }

    // Endpoint: POST /generateData
    // Objetivo: Recibir cantidad de users y pets, e insertarlos en BD
    generateData = async (req, res) => {
        const { users, pets } = req.body; // Esperamos { "users": 10, "pets": 20 }

        try {
            // 1. Generar Usuarios
            const usersList = [];
            // ParseInt asegura que sea un número, y || 0 evita errores si no envían el campo
            const usersCount = parseInt(users) || 0; 
            
            for (let i = 0; i < usersCount; i++) {
                usersList.push(generateUser());
            }

            // 2. Insertar Usuarios en BD
            if (usersList.length > 0) {
                await usersDao.insertMany(usersList);
            }

            // 3. Generar Mascotas
            const petsList = [];
            const petsCount = parseInt(pets) || 0;

            for (let i = 0; i < petsCount; i++) {
                petsList.push(generatePet());
            }

            // 4. Insertar Mascotas en BD
            if (petsList.length > 0) {
                await petsDao.insertMany(petsList);
            }

            res.send({ 
                status: "success", 
                message: "Datos generados e insertados correctamente",
                inserted: {
                    users: usersCount,
                    pets: petsCount
                }
            });

        } catch (error) {
            console.error(error);
            res.status(500).send({ status: "error", error: error.message });
        }
    }
}

module.exports = new MocksController();