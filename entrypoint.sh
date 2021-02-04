#!/bin/sh
# Replace string in static files
# sed -i "s/old-text/new-text/g" input.txt

set -xe
  : "${SERVER_NAME?Precisa de uma variavel de ambiente SERVER_NAME}"

set -xe
  : "${REACT_APP_API_URL?Precisa de uma variavel de ambiente REACT_APP_API_URL}"


sed -i "s,SERVER_NAME,$SERVER_NAME,g" /etc/nginx/conf.d/default.conf


exec "$@"