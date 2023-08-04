FROM mysql:8.1.0

ENV MYSQL_DATABASE fullcycle-db
ENV MYSQL_ROOT_PASSWORD fullcycle-root-pass

ADD init.sql /docker-entrypoint-initdb.d

