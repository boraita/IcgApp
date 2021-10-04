FROM node:12.17.0-alpine AS builder
WORKDIR /app
COPY api/package.json ./
COPY api/tsconfig.json ./
COPY api/src ./src
RUN ls -a
RUN npm install
RUN npm run build
## this is stage two , where the app actually runs
FROM node:12.17.0-alpine
WORKDIR /app
COPY api/package.json ./
RUN npm install --only=production
COPY --from=builder /app/dist .
RUN npm install pm2 -g
EXPOSE 2700
CMD ["pm2-runtime","app.js"]