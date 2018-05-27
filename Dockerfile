FROM node:carbon

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

EXPOSE 3434

CMD ["npm", "start"]