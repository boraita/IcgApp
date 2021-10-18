FROM node:12 as builder

ARG STAGE=""

ENV NODE_ENV=production 

WORKDIR /app

COPY ./web .

RUN npm install -g @angular/cli

RUN npm i

RUN npm run build

# RUN if [[ -z "$STAGE" ]] ; then npm run build ; else npm run build:$STAGE; fi

FROM nginx:1.19-alpine
ENV TZ=Europe/Berlin

COPY --from=builder /app/dist/icg-app/ /usr/share/nginx/html/
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp
