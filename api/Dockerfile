FROM balenalib/rpi-node AS builder
WORKDIR /app
COPY api/package.json ./
COPY api/tsconfig* ./
COPY api/yarn.lock ./
COPY api/nest-cli.json ./
COPY api/src ./src
RUN npm install -g @nestjs/cli
RUN yarn
RUN yarn build
## this is stage two , where the app actually runs
FROM node:16-slim

WORKDIR /app
COPY --from=builder /app/node_modules/ ./node_modules
COPY --from=builder /app/dist/ ./dist
EXPOSE 2700
CMD ["node", "dist/main"]