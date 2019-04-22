FROM node:11.14.0-alpine

ADD package.json /package.json
RUN cd / && npm install
ADD . /app
WORKDIR /app
RUN /node_modules/.bin/next build

CMD npm start
