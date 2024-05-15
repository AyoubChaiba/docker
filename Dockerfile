FROM node:20 as base
WORKDIR /app
COPY package.json .
EXPOSE 3000

FROM base as development
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

FROM base as production
RUN npm install --only=production
COPY . .
CMD ["npm", "start"]