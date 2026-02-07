# 1. Usamos una imagen ligera de Node.js (Alpine es ideal por su tamaño)
FROM node:20-alpine

# 2. Creamos y definimos el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos solo los archivos de dependencias primero
# Esto ayuda a que Docker cachee las capas y no reinstale todo si solo cambias código
COPY package*.json ./

# 4. Instalamos las dependencias (puedes usar 'npm ci' para una instalación más limpia)
RUN npm install --omit=dev

# 5. Copiamos el resto del código del proyecto
COPY . .

# 6. Exponemos el puerto que usa tu app (ajusta el 8080 si usas otro)
EXPOSE 8080

# 7. Comando para arrancar la aplicación
CMD ["node", "src/app.js"]