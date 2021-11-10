# FROM balenalib/raspberry-pi-node:16-buster-run as builder

# ARG STAGE=""

# WORKDIR /app

# COPY /home/gitactions/icg-app/web/dist ./dist
# COPY /home/gitactions/icg-app/web/nginx/nginx.conf ./dist
# COPY ./web/angular.json ./
# COPY ./web/package* ./
# COPY ./web/tsconfig.* ./
# COPY ./web/nginx.conf ./
# COPY ./web/src ./src

# RUN npm install -g @angular/cli

# RUN npm ci

# RUN npm run build

# RUN if [[ -z "$STAGE" ]] ; then npm run build ; else npm run build:$STAGE; fi

FROM nginx:1.19-alpine
ENV TZ=Europe/Berlin

COPY /home/gitactions/icg-app/web/dist /usr/share/nginx/html/
COPY /home/gitactions/icg-app/web/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/dist /usr/share/nginx/html/
# COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp
