FROM balenalib/raspberry-pi-node:16-buster-run  AS builder
WORKDIR /app
COPY api/package* ./
COPY api/tsconfig* ./
COPY api/nest-cli.json ./
COPY api/src ./src
RUN npm install
RUN npm run build
## this is stage two , where the app actually runs
FROM node:16-slim

WORKDIR /app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules/ ./node_modules
COPY --from=builder /app/dist/ ./dist
EXPOSE 2700
CMD ["npm", "run", "start:prod"]