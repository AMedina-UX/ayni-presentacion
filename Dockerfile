FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build


FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

RUN npm install --omit=dev

EXPOSE 4321

CMD ["npx", "astro", "preview", "--host", "0.0.0.0", "--port", "4321"]