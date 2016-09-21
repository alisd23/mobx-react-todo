FROM node

WORKDIR /app

COPY package.json ./
RUN npm cache clean
RUN npm install

COPY . ./

RUN npm run build

EXPOSE 9999

ENTRYPOINT npm run server 9999
