FROM nginx:1.19-alpine
ENV TZ=Europe/Berlin

COPY ./web/dist/web-app /usr/share/nginx/html/
COPY ./web/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp
