FROM node:21-alpine

ENV LANG="C.UTF-8" PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

RUN apk update
RUN apk add --no-cache zlib-dev udev nss ca-certificates
RUN apk add --no-cache chromium
RUN yarn cache clean
RUN rm -rf /tmp/* /etc/apk/* /var/cache/apk/* /usr/share/man

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

RUN npm run build

RUN cp -r src/views dist/

EXPOSE 3000

CMD ["npm", "run", "start"]