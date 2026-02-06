const { Router } = require('express');
const petsController = require('../controllers/pets.controller');
const router = Router();
router.get('/', petsController.getAllPets);
router.post('/', petsController.createPet);
module.exports = router;