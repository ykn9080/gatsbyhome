

FROM node:14.4-alpine3.11

# Also exposing VSCode debug ports
EXPOSE 80 9929 9230

RUN \
    apk add --no-cache python3 make g++ && \
    apk add vips-dev fftw-dev --update-cache \
    --repository http://dl-3.alpinelinux.org/alpine/edge/community \
    --repository http://dl-3.alpinelinux.org/alpine/edge/main \
    && rm -fR /var/cache/apk/*

RUN apk add automake autoconf libtool nasm

RUN npm install -g gatsby-cli

WORKDIR /app
COPY ./package.json .
RUN npm install && gatsby clean
COPY . .
CMD ["yarn", "develop", "-H", "0.0.0.0" ]