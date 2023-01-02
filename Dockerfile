FROM node:18-alpine

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh

RUN /entrypoint.sh

COPY . .

RUN npm i

ENTRYPOINT ["/entrypoint.sh"]

CMD ["npm", "run", "docker"]