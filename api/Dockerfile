FROM node:16  AS builder
WORKDIR /app
COPY api/package* ./
COPY api/tsconfig* ./
COPY api/nest-cli.json ./
COPY api/src ./src
RUN npm install
# RUN npm run build
## this is stage two , where the app actually runs
FROM node:16-slim

WORKDIR /app
COPY --from=builder /app/dist/ ./dist
COPY --from=builder /app/node_modules/ ./node_modules
EXPOSE 2700
CMD ["sh", "-c", "exec node --max_old_space_size=${AM_MAX_MEMORY_SIZE} dist/main"]
