const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app'); 

describe('Tests de Usuarios', () => {
    
    describe('GET /api/users', () => {
        it('Debería retornar un status 200 y una lista de usuarios', async () => {
            const response = await request(app).get('/api/users');
            
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an('array');
        });
    });

    
    describe('POST /api/users', () => {
        it('Debería crear un usuario correctamente', async () => {
            const newUser = {
                name: "Test User",
                email: "test@example.com",
                password: "password123"
            };

            const response = await request(app)
                .post('/api/users')
                .send(newUser);

            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('_id');
            expect(response.body.email).to.equal(newUser.email);
        });
    });
});