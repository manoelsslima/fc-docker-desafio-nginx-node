FROM nginx:1.21.6-alpine

COPY default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]