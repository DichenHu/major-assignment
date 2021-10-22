FROM node:15.13-alpine
WORKDIR /myfirstapp

COPY . .
RUN npm install
CMD ["npm","start"]