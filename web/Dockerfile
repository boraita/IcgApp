FROM node:14 AS builder

ARG STAGE=""

ENV NODE_ENV=production 

WORKDIR /app

COPY ./web .

RUN npm i -g yarn

RUN yarn install --frozen-lockfile

# RUN if [[ -z "$STAGE" ]] ; then npm run build ; else npm run build:$STAGE; fi
RUN yarn build

FROM nginx:1.19-alpine
ENV TZ=Europe/Berlin

COPY --from=builder /app/build/ /usr/share/nginx/html/
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp
