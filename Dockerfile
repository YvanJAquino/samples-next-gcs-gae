# Build the Private GCS Proxy from source
FROM    golang:1.18-bullseye as proxyBuilder
ARG     GH_NETLOC=https://github.com
ARG     GH_USER=YvanJAquino
ARG     GH_REPO=private-gcs-proxy
WORKDIR /build
RUN     git clone $GH_NETLOC/$GH_USER/$GH_REPO && \
        cd $GH_REPO/service && \
        go build -o gs-proxy && \
        echo "Added to force an update"

# Configure the runtime environment
FROM    node:19-bullseye
ARG     GH_REPO=private-gcs-proxy
ENV     PROXY_PORT=1274 \
        PORT=8080 \
        NODE_ENV=production
WORKDIR /app
COPY    --from=proxyBuilder /build/$GH_REPO/service/gs-proxy gs-proxy
COPY    package.json package-lock.json ./
RUN     apt update && \
        apt install -y curl ca-certificates && \
        npm ci --omit dev

COPY    . .
RUN     npm run build

# RUN     addgroup --system --gid 1001 nodejs && \
#         adduser --system --uid 1001 nextjs --gid 1001
# USER    nextjs

EXPOSE  8080
CMD     ["./startup.sh"]

