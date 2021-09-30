FROM node:lts-alpine AS builder

ARG STAGE=""

WORKDIR /app

COPY . .

RUN npm install --production 

RUN if [[ -z "$STAGE" ]] ; then npm run build ; else npm run build:$STAGE ; fi

FROM nginx:1.19-alpine
ENV TZ=Europe/Berlin

COPY --from=builder /app/build/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp