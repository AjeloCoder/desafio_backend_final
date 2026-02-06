const express = require('express');
const mongoose = require('mongoose');
const DB = require('./config/db');
const mocksRouter = require('./routes/mocks.router'); 
const usersRouter = require('./routes/users.router');

const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./utils/swagger');


const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a Base de Datos
DB.getInstance();

// Rutas (Las definiremos a continuación)
// const usersRouter = require('./routes/users.router');
// const petsRouter = require('./routes/pets.router');
// const adoptionsRouter = require('./routes/adoptions.router');
// const mocksRouter = require('./routes/mocks.router'); // <--- La prioridad ahora

 app.use('/api/users', usersRouter);
// app.use('/api/pets', petsRouter);
// app.use('/api/adoptions', adoptionsRouter);
app.use('/api/mocks', mocksRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));