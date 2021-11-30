FROM node:16  AS builder
WORKDIR /app
COPY api/package* ./
COPY api/tsconfig* ./
COPY api/nest-cli.json ./
COPY api/src ./src
COPY api/dist ./dist
RUN npm install
# RUN npm run build
FROM node:16-alpine

WORKDIR /app
COPY --from=builder /app/dist/ ./dist
COPY --from=builder /app/node_modules/ ./node_modules
EXPOSE 2700
EXPOSE 5432
ENTRYPOINT ["sh", "-c", "exec node dist/main"]
