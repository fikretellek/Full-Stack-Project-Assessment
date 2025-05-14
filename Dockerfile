FROM node:20-alpine

RUN apk add --no-cache postgresql-client

WORKDIR /home/node/app

COPY package*.json ./
COPY client/package*.json client/
COPY server/package*.json server/

RUN npm ci --include-workspace-root

COPY . .

RUN chmod +x /home/node/app/db/seed.sh

RUN npm run build
