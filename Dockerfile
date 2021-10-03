FROM node:14 AS builder

ARG STAGE=""

ENV NODE_ENV=production 

WORKDIR /app

COPY . .

RUN npm ci

# RUN if [[ -z "$STAGE" ]] ; then npm run build ; else npm run build:$STAGE; fi
RUN npm run build

FROM nginx:1.19-alpine
ENV TZ=Europe/Berlin

COPY --from=builder /app/build/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp
