const { faker } = require('@faker-js/faker');
const { createHash } = require('./hash');

// Generador de Usuarios
const generateUser = () => {
    // Generamos un rol aleatorio (50% probabilidad)
    const role = Math.random() > 0.5 ? 'admin' : 'user';

    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: createHash('coder123'), // Requisito: Encriptada y siempre la misma
        role: role,
        pets: [] // Requisito: Array vacío
    };
};

// Generador de Mascotas
const generatePet = () => {
    const specie = Math.random() > 0.5 ? 'dog' : 'cat';
    
    return {
        name: faker.person.firstName(),
        specie: specie,
        birthDate: faker.date.past(),
        adopted: false,
        image: faker.image.urlLoremFlickr({ category: 'animals' }) // Imagen random opcional
    };
};

module.exports = { generateUser, generatePet };