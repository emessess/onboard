#get lastest node image
FROM node:latest

#create and change to working dir for app
WORKDIR /usr/src/app

#copy the package file and package-lock
COPY package*.json ./

#get packages
RUN npm install

#copy the source files
COPY . .

#expose port
EXPOSE 8080

#run it
CMD ["npm", "start"]
