

FROM node:16.4.0 AS build
WORKDIR /dist/src/app
RUN npm cache clean --force
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:latest AS ngi
COPY --from=build /dist/src/app/dist/qr-code-generator /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80