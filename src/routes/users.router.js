const { Router } = require('express');
const usersController = require('../controllers/users.controller');

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID autogenerado por MongoDB
 *         first_name:
 *           type: string
 *           description: Nombre del usuario
 *         last_name:
 *           type: string
 *           description: Apellido del usuario
 *         email:
 *           type: string
 *           description: Correo electrónico único
 *         password:
 *           type: string
 *           description: Contraseña encriptada
 *         role:
 *           type: string
 *           description: Rol del usuario (user/admin)
 *           default: user
 *         pets:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *                _id:
 *                  type: string
 *           description: Array de IDs de mascotas adoptadas
 *       example:
 *         first_name: Juan
 *         last_name: Perez
 *         email: juan@perez.com
 *         password: (encriptada)
 *         role: user
 *         pets: []
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', usersController.getAllUsers);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Error al crear usuario
 */
router.post('/', usersController.createUser);

module.exports = router;