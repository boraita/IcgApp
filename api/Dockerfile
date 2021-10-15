FROM node:12.17.0-alpine AS builder
WORKDIR /app
COPY api/package.json ./
COPY api/tsconfig.json ./
COPY api/src ./src
RUN ls -a
RUN yarn
RUN yarn build
## this is stage two , where the app actually runs
FROM node:12.17.0-alpine
WORKDIR /app
COPY api/package.json ./
RUN yarn
COPY --from=builder /app/dist .
RUN npm install pm2 -g
EXPOSE 2700
CMD ["pm2-runtime","app.js"]