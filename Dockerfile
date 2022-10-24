# Especifica la versión y la imagen 
# Nombre Desarrollo de imagen (puede ser cualquier cosa)
FROM node:16.17.0-alpine 
# Especifica el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia package-lock.json y package.json del host al directorio de trabajo del contenedor interno
COPY package*.json ./

# Instala las dependencias con yarn dentro dentro del contenedor
RUN yarn install 

# Copia el contenido de la carpeta local en el directorio de trabajo dentro del contenedor
COPY . .

# Compila la aplicacion con yarn dentro del contenedor
RUN yarn run build

# Indica el puerto en el que va a escuchar el contenedor
EXPOSE 3000

# Ejecuta la aplicación
CMD ["yarn","start" ]