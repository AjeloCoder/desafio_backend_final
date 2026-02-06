const mongoose = require('mongoose');

const collection = 'adoptions';

const schema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    pet:   { type: mongoose.Schema.Types.ObjectId, ref: 'pets', required: true },
    date:  { type: Date, default: Date.now }
});

const adoptionModel = mongoose.model(collection, schema);
module.exports = adoptionModel;