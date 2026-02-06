const mongoose = require('mongoose');
require('dotenv').config();

class DB {
    static #instance;
    constructor() {
         console.log("Intentando conectar a MongoDB...");
        console.log("URL leída:", process.env.MONGO_URL); 
        mongoose.connect(process.env.MONGO_URL)
            .then(() => console.log('Conectado a MongoDB (Adoptions)'))
            .catch(e => console.error('Error de conexión', e));
    }
    static getInstance() {
        if (this.#instance) {
            console.log('La conexión ya existe');
            return this.#instance;
        }
        this.#instance = new DB();
        return this.#instance;
    }
}

module.exports = DB;