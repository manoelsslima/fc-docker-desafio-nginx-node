FROM nginx:1.21.6-alpine
RUN echo "Dockerfile do nginx"

# exclui o arquivo original de configuracao
#RUN rm /etc/nginx/conf.d/default.conf /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d
#COPY nginx.conf /etc/nginx/nginx.conf

# quando o nginx subir, eh preciso ter um arquvio index.php para chamar o arquivo remoto
# se nao existir, retorna erro 404
#RUN mkdir /var/www/html -p && touch /var/www/html/index.php
ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]