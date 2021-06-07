FROM node:14-alpine

WORKDIR /app

COPY . /app

RUN npm ci --no-audit --production 

EXPOSE 8080

CMD ["npm", "start"]
