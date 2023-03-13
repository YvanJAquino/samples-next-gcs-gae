#! /bin/bash

# Startup the proxy
./gs-proxy &

# Startup the web app
npm run start

wait -n
exit $?