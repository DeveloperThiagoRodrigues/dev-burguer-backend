FROM node:20-alpine

WORKDIR /app


COPY package.json ./

RUN npm install

COPY . .

RUN mkdir -p /app/uploads

VOLUME ["/app/uploads"]

EXPOSE 3001

CMD npx sequelize-cli db:migrate && npm run start
