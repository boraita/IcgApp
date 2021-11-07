FROM node:16-slim AS builder
WORKDIR /app
COPY api/package.json ./
COPY api/tsconfig.* ./
COPY api/yarn.lock ./
COPY api/src ./src
RUN npm install -g @nestjs/cli
RUN yarn
RUN yarn build
## this is stage two , where the app actually runs
FROM node:16-slim
ENV NODE_ENV production
USER node
WORKDIR /app
COPY --from=builder /app/node_modules/ ./node_modules
COPY --from=builder /app/dist/ ./dist
EXPOSE 2700
CMD ["npm", "dist/main"]