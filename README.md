🐾 Sistema de Adopciones - Backend IIIEste proyecto es una API robusta diseñada para gestionar procesos de adopción de mascotas, desarrollada bajo los estándares de Backend III. Incluye una arquitectura escalable, persistencia de datos con MongoDB, pruebas automatizadas y contenedores Docker para un despliegue inmediato.
 
 🛠️ Tecnologías y DependenciasEl proyecto utiliza las siguientes herramientas clave:DependenciaPropósitoNode.js & ExpressEntorno de ejecución y framework para la creación de la API REST.MongooseODM para modelar y conectar de forma sencilla con MongoDB.Bcrypt / JWTManejo de seguridad, encriptación de contraseñas y tokens de autenticación.DotenvGestión de variables de entorno para proteger credenciales sensibles.Mocha & ChaiFramework de pruebas y librería de aserciones para validar la lógica de negocio.SupertestHerramienta para realizar pruebas de integración sobre los endpoints HTTP.
 
 🚀 Instalación y Uso LocalSi prefieres ejecutar el proyecto directamente en tu máquina:Clonar el repositorio:Bashgit clone https://github.com/AlejoBermudez/desafio_final_backend.git
cd desafio_final_backend
Instalar dependencias:Bashnpm install
Configurar variables de entorno:Crea un archivo .env en la raíz con el siguiente formato:PlaintextPORT=8080
MONGO_URL=tu_url_de_mongodb
SECRET_KEY=tu_clave_secreta
Ejecutar en modo desarrollo:Bashnpm run dev

🐳 Despliegue con Docker (Recomendado)Para garantizar que el proyecto funcione en cualquier entorno sin conflictos de versiones o puertos, utilizamos Docker.Construir la imagen:Bashdocker build -t desafio-backend-img .
Ejecutar el contenedor:Para evitar conflictos de puertos locales (como el error de puerto ya asignado), mapeamos el puerto 9000 de tu PC al 8080 del contenedor:Bashdocker run -p 9000:8080 --name backend-adopciones --env-file .env desafio-backend-img
Nota: El uso de --env-file .env es obligatorio para inyectar la URL de MongoDB al contenedor.🧪 Pruebas Automatizadas (Testing)Hemos implementado tests de integración para asegurar que los controladores de usuarios y mascotas funcionen correctamente.Ejecutar todos los tests:Bashnpm test
Los tests verifican:Conectividad de los endpoints principales.Correcta creación de recursos en la base de datos.Validaciones de seguridad y manejo de errores (ej: 404 Not Found o 400 Bad Request).

📁 Estructura del Proyectosrc/app.js: Punto de entrada de la aplicación.src/routes/: Definición de todos los endpoints (ej: users.router.js).src/controllers/: Lógica de negocio (ej: users.controller.js).src/config/: Configuración de base de datos y variables globales.test/: Suite de pruebas con Mocha, Chai y Supertest.

👤 AutorAlejo Bermúdez - GitHub Profile
