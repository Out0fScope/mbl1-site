FROM node:20-alpine

RUN apk update

WORKDIR /app
COPY . .

RUN npm install


EXPOSE 2447

CMD ["sh", "-c", "npm run build && npm start"]
