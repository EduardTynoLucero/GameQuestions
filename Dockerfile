# ---------- Base ----------
FROM node:18-alpine AS base

# ---------- Deps ----------
FROM base AS deps
RUN apk add --no-cache libc6-compat python3 make g++ pkgconfig
WORKDIR /app

# Copia manifiestos (si no hay lockfile, igual copia solo package.json)
COPY package.json package-lock.json* ./

# Evitar ruido de npm
RUN npm config set fund false && npm config set audit false

# Instalar dependencias con fallback y diagnóstico
# 1) Si hay lockfile: intenta npm ci; si falla, cae a npm install con legacy-peer-deps
# 2) Si NO hay lockfile: npm install con legacy-peer-deps
RUN set -eux; \
  echo "Node: $(node -v)  NPM: $(npm -v)"; \
  if [ -f package-lock.json ]; then \
    echo "Usando npm ci…"; \
    npm ci --no-audit --no-fund || (echo "npm ci falló, probando npm install…" && npm install --no-audit --no-fund --legacy-peer-deps); \
  else \
    echo "No hay package-lock.json; usando npm install…"; \
    npm install --no-audit --no-fund --legacy-peer-deps; \
  fi

# ---------- Build ----------
FROM base AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- Runtime ----------
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 4500
ENV PORT=4500
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
