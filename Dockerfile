FROM node:14-alpine as builder
WORKDIR /app
COPY . ./
RUN yarn install --frozen-lockfile --no-cache && yarn build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./conf/default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["/entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
