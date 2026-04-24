# Multi-stage build for SvelteKit + adapter-node on Fly.io.
# Stage 1: install deps + build static assets + node server.
# Stage 2: trim to a production-only image with just the built output + prod deps.

# -----------------------------------------------------------------------------
# Stage 1 — build
# -----------------------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy manifest first so Docker layer-caches the install step.
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest of the source + build.
COPY . .
RUN npm run build

# Trim dev dependencies out of node_modules for the runtime stage.
RUN npm prune --omit=dev

# -----------------------------------------------------------------------------
# Stage 2 — runtime
# -----------------------------------------------------------------------------
FROM node:20-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Non-root user for defense-in-depth.
RUN addgroup -g 1001 -S nodejs && adduser -S svelte -u 1001

COPY --from=builder --chown=svelte:nodejs /app/build ./build
COPY --from=builder --chown=svelte:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=svelte:nodejs /app/package.json ./package.json

USER svelte

EXPOSE 3000

CMD ["node", "build/index.js"]
