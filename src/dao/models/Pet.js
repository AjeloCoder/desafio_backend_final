const mongoose = require('mongoose');

const collection = 'pets';

const schema = new mongoose.Schema({
    name:      { type: String, required: true },
    specie:    { type: String, required: true },
    birthDate: { type: Date },
    adopted:   { type: Boolean, default: false },
    owner:     { type: mongoose.Schema.Types.ObjectId, ref: 'users' }, // Dueño (si es adoptado)
    image:     { type: String } // Opcional para el futuro
});

const petModel = mongoose.model(collection, schema);
module.exports = petModel;