FROM node:lts-alpine

WORKDIR /usr/src/app
ENV NODE_ENV production

COPY package*.json ./
COPY prisma ./prisma/
RUN npm install
RUN npx prisma generate

COPY . .


CMD [ "node", "dist/server" ]
EXPOSE 3000