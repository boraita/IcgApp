FROM node:16  AS builder
WORKDIR /app
COPY api/package* ./
COPY api/tsconfig* ./
COPY api/nest-cli.json ./
COPY api/src ./src
COPY api/dist ./dist
COPY api/migrations ./migrations
RUN npm install
# RUN npm run build
FROM node:16-alpine

WORKDIR /app
COPY --from=builder /app/migrations ./migrations
COPY --from=builder /app/package.* ./
COPY --from=builder /app/dist/ ./dist
COPY --from=builder /app/node_modules/ ./node_modules
# CMD ["npm", "run", "typeorm:run"]
ENTRYPOINT ["npm", "run", "start:prod"]
