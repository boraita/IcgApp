FROM node:lts-alpine AS builder

ARG STAGE=""

ENV NODE_ENV=production 

WORKDIR /app

COPY . .

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps

RUN npm ci

RUN if [[ -z "$STAGE" ]] ; then npm run build ; else npm run build:$STAGE; fi

FROM nginx:1.19-alpine
ENV TZ=Europe/Berlin

COPY --from=builder /app/build/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp
