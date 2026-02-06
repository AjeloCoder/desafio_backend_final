const { Router } = require('express');
const mocksController = require('../controllers/mocks.controller');

const router = Router();

router.get('/mockingusers', mocksController.getMockingUsers);
router.post('/generateData', mocksController.generateData);

module.exports = router;