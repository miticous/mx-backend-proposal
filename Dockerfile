FROM node:14-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN yarn install
RUN yarn compile

EXPOSE 8080

CMD [ "yarn", "start" ]
