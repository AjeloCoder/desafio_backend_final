const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación API Adopciones',
            description: 'API para la gestión de adopciones de mascotas y usuarios.',
            version: '1.0.0'
        }
    },
    // Indicamos dónde están los archivos que tienen la documentación (comentarios)
    // Usamos path.resolve para evitar problemas de rutas en Windows/Docker
    apis: [`${path.join(__dirname, '../routes/*.js')}`] 
};

const swaggerSpecs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpecs;