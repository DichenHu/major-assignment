FROM node:14
COPY FrontEnd/myfirstapp/package.json ./
COPY FrontEnd/myfirstapp/package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
WORKDIR /FrontEnd/myfirstapp/
CMD [ "npm", "start" ]  