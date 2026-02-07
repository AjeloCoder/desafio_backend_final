const { faker } = require('@faker-js/faker');
const { createHash } = require('./hash');


const generateUser = () => {
    const role = Math.random() > 0.5 ? 'admin' : 'user';

    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: createHash('coder123'), 
        role: role,
        pets: [] 
    };
};


const generatePet = () => {
    const specie = Math.random() > 0.5 ? 'dog' : 'cat';
    
    return {
        name: faker.person.firstName(),
        specie: specie,
        birthDate: faker.date.past(),
        adopted: false,
        image: faker.image.urlLoremFlickr({ category: 'animals' })
    };
};

module.exports = { generateUser, generatePet };