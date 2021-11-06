FROM node:16.13.0-alpine AS builder
WORKDIR /app
COPY api/package.json ./
COPY api/tsconfig.json ./
COPY api/yarn.lock ./
COPY api/nest-cli.json ./
COPY api/src ./src
RUN ls -a
RUN yarn
RUN yarn build
## this is stage two , where the app actually runs
FROM node:16.13.0-alpine
WORKDIR /app
COPY api/package.json ./
RUN yarn
COPY --from=builder /app/dist .
EXPOSE 2700
CMD ["yarn","start:prod"]